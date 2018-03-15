cc=g++
exe=main
obj=math_ops.o


$(exe):$(obj)
	$(cc) -o $(exe) $(obj)

math_ops.o:math_ops.cpp
	$(cc) -c math_ops.cpp


clean:
	rm -rf $(obj) main
