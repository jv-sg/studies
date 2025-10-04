a = 'A'
b = 'B'
c = 1.1
formato = 'a={0} b={1} c={2:.2f} d={2}'.format(a, b, c)
formato1 = 'a={nome0} b={nome1} c={nome2:.2f} d={nome2}'.format(nome0=a, nome1=b, nome2=c)

print(formato)

print(formato1)