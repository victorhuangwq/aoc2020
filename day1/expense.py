
f = open("list.txt","r")

temp_list = f.read().splitlines()

available_dict = dict()
previous_set = set()

for i in temp_list:
    integer = int(i)
    if((2020 - integer) in available_dict):
        print(integer,available_dict[2020-integer])
    else:
        for j in previous_set:
           if( integer + j < 2000):
               available_dict[integer + j] = [integer,j]
        previous_set.add(integer)
        
