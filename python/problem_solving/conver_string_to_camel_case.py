def to_camel_case(text):
    separators = "-_ "
    i = 0
    while i < len(text):
        char = text[i]
        if(char in separators):
            text = text[:i] + text[i+1].upper() + text[i+2:]
        i+=1
    return text

print(to_camel_case("my name is mohamed") == "myNameIsMohamed")
print(to_camel_case("the-stealth-warrior") == "theStealthWarrior")
print(to_camel_case("The_Stealth_Warrior") == "TheStealthWarrior")
print(to_camel_case("The_Stealth-Warrior") == "TheStealthWarrior")
print(to_camel_case("A-B-C") == "ABC")