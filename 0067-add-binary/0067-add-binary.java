class Solution {
    public String addBinary(String a, String b) {
        int i = a.length() - 1;
        int j = b.length() - 1;
        int carry = 0;
        StringBuilder resultado = new StringBuilder();

        while (i >= 0 || j >= 0 || carry > 0) {
            int digitoA;
            if (i >= 0) {
                digitoA = a.charAt(i) - '0';
            } else {
                digitoA = 0;
            }

            int digitoB;
            if (j >= 0) {
                digitoB = b.charAt(j) - '0';
            } else {
                digitoB = 0;
            }

            int soma = digitoA + digitoB + carry;
            int digito = soma % 2;
            carry = soma / 2;

            resultado.append(digito);

            i--;
            j--;
        }

        return resultado.reverse().toString();
    }
}