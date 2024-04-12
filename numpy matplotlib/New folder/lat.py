import matplotlib.pyplot as plt
import numpy as np
x=open("pip-latency-comparison.txt","r")
y=x.read()
y=y.split()
pip=[]
flush=[]
psfq=[]
fetch=[]
asd=[1,2,3,4,5,6,7,8,9]
for st in y:
    z=st.split(sep=",")
    print(z)
    if (z[1]!="" and z[1]!="PIP"):
        pip.append(float(z[1]))
    if (z[2]!="" and z[2]!="Flush"):
        flush.append(float(z[2]))
    if (z[3]!="" and z[3]!="PSFQ"):
        psfq.append(float(z[3]))
    if (z[4]!="" and z[4]!="Fetch"):
        fetch.append(float(z[4]))
  
#y=np.array(y)
#print(y)
print(pip)
print(flush)
print(psfq)
print(fetch)
plt.plot(asd[0:(len(pip))],pip,marker="x",c="red",ls="solid",ms="9",mew="2",lw="2",label="PIP")
plt.plot(asd[0:(len(flush))],flush,marker="+",c="blue",ls="dashed",ms="9",mew="2",lw="2",label="Flush")
plt.plot(asd[0:(len(psfq))],psfq,marker="o",c="black",ls="dashdot",ms="9",mew="2",lw="2",label="PSFQ")
plt.plot(asd[0:(len(fetch))],fetch,marker="^",c="green",ls="dotted",ms="9",mew="2",lw="2",label="Fetch")
plt.legend(loc="best")
plt.xlabel("Number of Hops")
plt.ylabel("Latency (ms)")
plt.grid()
plt.show()
