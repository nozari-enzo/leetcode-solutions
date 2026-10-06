class Solution {
    public char findTheDifference(String s, String t) {
        int[] contagem = new int[26];

        for (int i = 0; i < s.length(); i++) {
            char letra = s.charAt(i);
            contagem[letra - 'a']++;
        }

        for (int i = 0; i < t.length(); i++) {
            char letra = t.charAt(i);
            contagem[letra - 'a'] -= 1;
        }

        for (int i = 0; i < contagem.length; i++) {
            if (contagem[i] != 0) {
                return (char) (i + 'a');
            }
        }

        return ' ';
    }
}