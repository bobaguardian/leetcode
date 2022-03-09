// https://leetcode.com/problems/game-of-life

class Solution {
    public void gameOfLife(int[][] board) {
        int rowLength = board.length;
        int colLength = board[0].length;
        
        int[][] updated = new int[rowLength][colLength];
        for (int r = 0; r < rowLength; r++){
            for (int c = 0; c < colLength; c++){
                int liveCount = getLiveNeighbors(board, r, c);
                
                //check if dead cell has exactly 3 live neighbors
                if (board[r][c] == 0 && liveCount == 3){
                    updated[r][c] = 1;
                }
                //live cell has less than 2 neighbors
                else if (board[r][c] == 1 && (liveCount < 2)|| (liveCount > 3)){
                    updated[r][c] = 0;
                }
               // live cell has exactly 2 or 3 live neighbors
                else if (board[r][c] == 1 && (liveCount == 2) || (liveCount == 3)){
                    updated[r][c] = 1;
                }
                else{
                    updated[r][c] = board[r][c];
                }
            }
            
        }
        
        //update board
        for (int i = 0; i < board.length; i++){
            for (int j = 0; j < board[0].length; j++){
                board[i][j] = updated[i][j];
            }
        }
         
    }
    
    
    // helper method to return the number of live neighbors given the current
    // position and the board
    private int getLiveNeighbors(int[][] board, int row, int col){
        int rowLength = board.length;
        int colLength = board[0].length;
        int liveCount = 0;
        
        //checks the entire row  BEFORE given position
        if (row > 0){// row is within lower bound
            if (col > 0){
                liveCount += (board[row-1][col-1] == 1) ? 1 : 0;
            }
            if (col < colLength-1){
                liveCount += (board[row-1][col+1] == 1) ? 1 : 0;
            }
            liveCount += (board[row-1][col] == 1) ? 1 : 0;
        }
        
        //checks the entire row AFTER given position
        if (row < rowLength-1){ //row is within upper bound
            if (col > 0){
                liveCount += (board[row+1][col-1] == 1) ? 1 : 0;
            }
            if (col < colLength-1){
                liveCount += (board[row+1][col+1] == 1)  ? 1 : 0;
            }
            liveCount += (board[row+1][col] == 1)  ? 1 : 0;
        }
        
        //check positions to the left and right of given position
        if (col > 0){
            liveCount += (board[row][col-1] == 1) ? 1 : 0;
        }
        if (col < colLength-1){
            liveCount += (board[row][col+1] == 1) ? 1 : 0;
        }
        
        return liveCount;
        
    
    }
}