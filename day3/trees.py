f = open('map.txt','r')

input_lines = f.read().splitlines()
length = len(input_lines[0])
pos = 0

count_trees = 0
for line in input_lines:
    if(line[pos] == '#'):
        count_trees+=1
    pos = (pos+3)%length

print(count_trees)
