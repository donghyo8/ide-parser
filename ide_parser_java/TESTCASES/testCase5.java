import java.util.Scanner;

interface catWorld{
    public void call();
}
 
 
public class InterfaceTest implements catWorld{
    
    public void call() { //오버라이드
        System.out.println("야옹야옹!");
    }
    
    public static void main(String[] args) {
        InterfaceTest it = new InterfaceTest();
        
        it.call();
    }
 
}
