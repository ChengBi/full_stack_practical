#include <iostream>
#include <stdio.h>

namespace math_ops{

    template <typename T> T sum(const T& a, const T& b){
        return a + b;
    }
    template <typename T> class scalar{
    private:
        const T& length;
        const scalar<T>* value;
    public:
        scalar();
        void setValue(const scalar<T>*, const T& length);
        const T& getValue();
    };
}
