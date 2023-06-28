const fakeDatabase = {
  // this is fake Arya
  student: [
    { username: "student1", password: "password1" },
    { username: "student2", password: "password2" },
  ],
  teacher: [
    { username: "teacher1", password: "password1" },
    { username: "teacher2", password: "password2" },
    { username: "teacher3", password: "password3" },
  ],
  manager: [
    { username: "manager1", password: "password1" },
  ],
};
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = loginForm.uname.value;
    const password = loginForm.psw.value;
    const selectedRole = document.querySelector('input[name="optradio"]:checked').value;

    const userGroup = fakeDatabase[selectedRole];
    if (userGroup) {
      const user = userGroup.find(user => user.username === username && user.password === password);
      if (user) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password!");
      }
    } else {
      alert("Invalid user group!");
    }
  });
});
