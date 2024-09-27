const express = require('express'); // express 모듈 가져오기
const cors = require('cors'); // cors 모듈 가져오기
const PORT = 8000;
const path = require('path');

const app = express(); // express 모듈을 사용하기 위해 app 변수에 할당한다.

app.use(cors()); //htpp, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.
app.use(express.json()); // express 모듈의 json() 메소드를 사용한다.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/chat', (req, res) => {
  const sendedQuestion = req.body.question;

  const scriptPath = path.join(__dirname, 'bizchat.py');
  const pythonPath = path.join(__dirname, 'venv', 'bin', 'python3');

  // Spawn the Python process with the correct argument
  const result = spawn(pythonPath, [scriptPath, sendedQuestion]);

  output = '';

  //파이썬 파일 수행 결과를 받아온다.
  result.stdout.on('data', function (data) {
    output += data.toString();
  });

  result.on('close', (code) => {
    if (code == 0) {
      res.status(200).json({ answer: output });
    } else {
      res.status(500).send('Something went wrong');
    }
  });

  result.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
});

app.use(require('./routes/getRoutes'));
app.use(require('./routes/postRoutes'));
app.use(require('./routes/deleteRoutes'));
app.use(require('./routes/updateRoutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
