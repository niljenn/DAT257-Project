import Company

testCompany = Company.Company(name='test_comp', emission_score=2, animal_friendly_score=5, plastic_score=0, other_factor_score = 1, description_file="test_description.txt", picture="test_picture.png")
overall_score = testCompany.calculate_overall_score()

print(f"Company name: {testCompany.name}")
print(f"Overall sustainability score: {overall_score}")
print(f"Emissions score: {testCompany.emission_score}")
print(f"Animal-friendly score: {testCompany.animal_friendly_score}")
print(f"Plastic usage score: {testCompany.plastic_score}")
print(f"Description:\n{testCompany.get_description()}")

