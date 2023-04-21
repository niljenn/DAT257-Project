class Company {

  constructor(name, emission, plasticUsage, animalWelfare, diversity, descriptionFile, imageFile) {
    this.name = name;
    this.emission = emission;
    this.plasticUsage = plasticUsage;
    this.animalWelfare = animalWelfare;
    this.diversity = diversity;
    this.descriptionFile = descriptionFile;
    this.imageFile = imageFile;
    this.active = false
  }

  isActive(){
    this.active == true;
  }

  notActive(){
    this.active ==false;
  }



  getOverallScore() {
    const weights = [0.4, 0.2, 0.2, 0.2]; //weights for each factor: emission, plasticUsage, animalWelfare, other
    const scores = [this.emission, this.plasticUsage, this.animalWelfare, this.other];
    const weightedScores = scores.map((score, index) => score * weights[index]); //multiply by weight
    const sum = weightedScores.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average = sum / weights.reduce((acc, val) => acc + val, 0); //normalize weights
    return parseFloat(average.toFixed(1));
  }

  getDescription() {
    return "descriptionFile";
  }
  
}
export { Company };
