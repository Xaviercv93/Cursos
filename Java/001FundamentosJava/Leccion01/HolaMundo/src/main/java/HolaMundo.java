/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author xavier
 */
public class HolaMundo {

    public static void main(String lalo[]) {

//        System.out.println("Hola Mundo");
//
//        String saludar = "Saludos";
//
//        System.out.println(saludar);
//        System.out.println(saludar);
//        System.out.println(saludar);
//
//        //var infiere el tipo de dato 
//        var despedirse = "Hasta luego";
//        System.out.println(despedirse);
//        
//        var numero = 1;
//        System.out.println(numero);
//Concatenacion de cadenas
//String ES EL UNICO OPERADOR SOBRECARGADO
//String es el unico operador con 2 funciones, concatenar y sumar
        var usuario = "Juan";
        var saludar = "Hola";

        System.out.println(usuario + " " + saludar);

//Ejemplos de Contexto String
//Las expresiones se evaluan de izquierda a derecha
        var i = 1;
        var j = 2;

        System.out.println(usuario + i + j);

        System.out.println(i + j + usuario);

    }
}
