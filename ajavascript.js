static Locale defaultLocale = new Locale("en", "US", "USD"); 
    static NumberFormat numberFormatter = NumberFormat.getCurrencyInstance(defaultLocale); 
     
    public static class CurrencyFormatRunnable implements Runnable { 
         
           double money; 
           public CurrencyFormatRunnable(Object parameter) { 
               this.money = (double)parameter; 
           }          
           
           public void run() { 
               String formattedMoney; 
               formattedMoney = numberFormatter.format(money); 
               if (!formattedMoney.equals("$"+money+"0")) { 
                    System.out.println("Formatted number was $" + money + ", but the result was " + formattedMoney +"!"); 
                    System.exit(1); 
                      
               } 
           } 
        } 
     
    public static void start() throws InterruptedException { 
        Runnable m1; 
        Runnable m2; 
        Thread t1; 
        Thread t2; 
        while(true) { 
            m1 = new CurrencyFormatRunnable((double)100.00); 
            m2 = new CurrencyFormatRunnable((double)50.00); 
            t1 = new Thread(m1); 
            t2 = new Thread(m2); 
         
            t1.start(); 
            t2.start(); 
             
            t1.join(); 
            t2.join(); 
        } 
    }
