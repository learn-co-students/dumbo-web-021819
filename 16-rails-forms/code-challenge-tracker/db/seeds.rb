
Student.create(name: "Graham")
Student.create(name: "Tony")
Student.create(name: "Greg")
Student.create(name: "Matt")
Student.create(name: "Tom")

CodeChallenge.create(mod: 1, name: "Mod 1 code challenge")
CodeChallenge.create(mod: 2, name: "Mod 2 code challenge")

Student.all.each do |student|
  Submission.create(code_challenge: CodeChallenge.first, student: student, grade: rand(1..5), link: "https://github.com/learn-co-curriculum/dumbo-web-012819/")
end