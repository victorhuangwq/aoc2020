import re
f = open("passlist.txt","r")

input_list = f.read().splitlines()

result = 0
for i in input_list:
    first = int(re.search('([0-9]*)-[0-9]* [a-z]: [a-z]*',i).group(1))
    second = int(re.search('[0-9]*-([0-9]*) [a-z]: [a-z]*',i).group(1))
    char = re.search('[0-9]*-[0-9]* ([a-z]): [a-z]*',i).group(1)
    password = re.search('[0-9]*-[0-9]* [a-z]: ([a-z]*)',i).group(1)
    if((password[first-1] == char)^(password[second-1] == char)):
        result+=1

print(result)
