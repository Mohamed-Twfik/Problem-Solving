def to_camel_case(text):
    words = text.replace("_", " ").replace("-", " ").split()
    return words[0]+"".join([word.capitalize() for word in words[1:]]) if words else ""


print(to_camel_case("my name is mohamed") == "myNameIsMohamed")
print(to_camel_case("the-stealth-warrior") == "theStealthWarrior")
print(to_camel_case("The_Stealth_Warrior") == "TheStealthWarrior")
print(to_camel_case("The_Stealth-Warrior") == "TheStealthWarrior")
print(to_camel_case("A-B-C") == "ABC")