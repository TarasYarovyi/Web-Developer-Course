class Computer {
  constructor(processor, RAM, hardDrive, graphicsCard) {
    this.processor = processor;
    this.RAM = RAM;
    this.hardDrive = hardDrive;
    this.graphicsCard = graphicsCard;
  }
  describe() {
    console.log(this.processor);
    console.log(this.RAM);
    console.log(this.hardDrive);
    console.log(this.graphicsCard);
  }
}

class ComputerBuilder {
  constructor() {
    this.processor = null;
    this.RAM = null;
    this.hardDrive = null;
    this.graphicsCard = null;
  }

  setProcessor(processorName) {
    this.processor = processorName;
    return this;
  }

  setRAM(RAMName) {
    this.RAM = RAMName;
    return this;
  }

  setHardDrive(hardDriveName) {
    this.hardDrive = hardDriveName;
    return this;
  }

  setGraphicsCard(graphicsCardName) {
    this.graphicsCard = graphicsCardName;
    return this;
  }

  build() {
    return new Computer(
      this.processor,
      this.RAM,
      this.hardDrive,
      this.graphicsCard
    );
  }
}
