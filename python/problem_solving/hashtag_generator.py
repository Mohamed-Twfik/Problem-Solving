def generate_hashtag(text):
    text = text.strip()
    if not text:
        return False
    
    # Conver to camel case
    words = text.replace("_", " ").replace("-", " ").split()
    result = "".join([word.capitalize() for word in words]) if words else ""
    
    if not result or len(result) > 140:
        return False
    return "#"+result

print(generate_hashtag(" Hello there thanks for trying my Kata")=="#HelloThereThanksForTryingMyKata")
print(generate_hashtag("looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong cat")==False)
print(generate_hashtag("ABbCccDdddEeeeeFfffffGggggggHhhhhhhhIiiiiiiiiJjjjjjjjjjKkkkkkkkkkkLlllllllllllMmmmmmmmmmmmmNnnnnnnnnnnnnnOooooooooooooooPpppppppppppppppQqqq")==False)
print(generate_hashtag("    Hello     World   ")=="#HelloWorld")
print(generate_hashtag("  ")==False)
print(generate_hashtag("")==False)
