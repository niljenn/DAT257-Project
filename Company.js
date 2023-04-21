class Company {
    constructor(name, ecoFriendliness, socialImpact, animalWelfare, diversity, descriptionFile, imageFile) {
      this.name = name;
      this.ecoFriendliness = ecoFriendliness;
      this.socialImpact = socialImpact;
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


  
    /*getOverallScore() {
      const scores = [this.ecoFriendliness, this.socialImpact, this.animalWelfare, this.diversity];
      const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
      const average = sum / scores.length;
      return parseFloat(average.toFixed(1));
    }
  
    getDescription() {
        return "descriptionFile";
    }
    */

  
}

export { Company };

  