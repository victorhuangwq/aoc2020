f = open('map.txt','r')

input_lines = f.read().splitlines()
length = len(input_lines[0])

slopes = [(1,1),(3,1),(5,1),(7,1),(1,2)]

result = 1
for slope in slopes:
    right = slope[0]
    down = slope[1]
    count_trees = 0
    pos = 0
    for i in range(len(input_lines)//down):
        line = input_lines[i*down]
        if(line[pos] == '#'):
            count_trees+=1
        pos = (pos+right)%length
    result *= count_trees
    
    
print(result)
