/*A junior developer structure student name, skills and score in array of arrays which may not easy to read.
 Destruction the following array name to name, skills array to skills, 
 scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, scores)
  console.log(jsScore, reactScore)
*/

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const Destruction = (student) => {
  let name, skills, scores, jsScore, reactScore;
  student.map((element, index) => {
    if (index == 0) {
      name = element;
    }
    if (index == 1) {
      skills = element;
    }
    if (index == 2) {
      scores = element;
    }
  });
  skills.map((s, i) => {
    if (s == "JS") {
      jsScore = scores[i];
    }
    if (s == "React") {
      reactScore = scores[i];
    }
  });

  console.log(` Nmae: ${name}, Skills : ${skills}, Scores ${scores}`);
  console.log(`JsScore : ${jsScore} ReactScore : ${reactScore}`);
};
// console.log(name, skills, scores)
// console.log(jsScore, reactScore)
console.log(` Nmae: ${name}, Skills : ${skills}, Scores ${scores}`);
  console.log(`JsScore : ${jsScore} ReactScore : ${reactScore}`);