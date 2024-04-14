#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
int main() {
    while(1){
        system("npm start");
        printf("Hello World \n");
        sleep(5);
}

    return 0;
}