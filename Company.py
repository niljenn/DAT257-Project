"""
class Company:
    def __init__(self, name, emission_score, animal_friendly_score, plastic_score, other_factor_score, description_file, picture=None):
        self.name = name
        self.emission_score = emission_score
        self.animal_friendly_score = animal_friendly_score
        self.plastic_score = plastic_score
        self.other_factor_score = other_factor_score
        self.description_file = description_file
        self.picture = picture
        
    def calculate_overall_score(self):
        #weighted overall score where emissions weigh the most and "other factor" weigh the least
        overall_score = (self.emission_score * 0.4) + (self.animal_friendly_score * 0.3) + (self.plastic_score * 0.2) + (self.other_factor_score * 0.1)
        overall_score = round(overall_score, 1)
        return overall_score
    
    def get_description(self):
        with open(self.description_file, 'r') as f:
            description = f.read()
        
        return description
        """