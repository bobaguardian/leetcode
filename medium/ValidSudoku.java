// https://leetcode.com/problems/valid-sudoku/

class Solution {
    public boolean isValidSudoku(char[][] board) {
        //All rows have no duplicates
        //All columns have no duplicates
        //All 3x3 boxes have no duplicates
        
        //These 2d arrays hold flags for if the value makes the board valid or not
        boolean[][] columnFlags = new boolean[10][10];
        boolean[][] rowFlags = new boolean[10][10];
        boolean[][] boxFlags = new boolean[10][10];
        
        for (int row = 0; row < 9; row++){
            for (int col = 0; col < 9; col++){
                if (board[row][col] == '.'){
                    continue;
                }
                
                int number = Character.getNumericValue(board[row][col]);
                
                //calculates the box that the current number belongs to
                int boxNum = (row / 3) * 3 + col / 3;
            
                //Checks flags to see if the number already appeared before in 
                //the same row, column, or box
                if (columnFlags[col][number] == true 
                   || rowFlags[row][number] == true 
                   || boxFlags[boxNum][number] == true) {
                
                    return false;
                }
                
                
                //toggles flags for the specific number on our 2d arrays
                //indicating that the number appears in that column, row, and box
                columnFlags[col][number] = true;
                rowFlags[row][number] = true;
                boxFlags[boxNum][number] = true;    
                
            }
        }
        return true;
        
    }
}