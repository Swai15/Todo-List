// Create item menu upon create page
// Use a class

export default class ProjectItem {
  constructor(name,example) {
    this.name = name;
    this.example = example;
  }

  testLog() {
    console.log(`${this.name} is in perfect ${this.example}`);
  }
}

// const item1 = new ProjectItem("Swai","health")
// console.log(item1.testLog());