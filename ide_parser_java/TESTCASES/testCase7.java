private int getBounusNumber(int[] normal_number) {
    int bonus = 0;
    int imsi = 0;

    while (true) {
        imsi = (int) (Math.random() * 45 + 1);
        for (int j = 0; j < normal_number.length; j++) {
            if (normal_number[j] == imsi) {
                duplicate = true;
            }
        }
        if (duplicate) {
            duplicate = false;
            continue;
        } else {
            break;
        }
    }
    bonus = imsi;
    System.out.println("(System)Success Create Bonus Number");
    return bonus;
}

private int[] getNormalNumber() {
    int[] normal_number = new int[6];
    int imsi = 0;
    for (int i = 0; i < normal_number.length; i++) {
        imsi = (int) (Math.random() * 45 + 1);// random 함수는 
                   //0.0~ 0.999...까지 랜덤으로 난수를 생성하는 함수입니다.

        for (int j = 0; j < i; j++) {
            if (normal_number[j] == imsi) {
                duplicate = true;
            }
        }
        if (!duplicate) {
            normal_number[i] = imsi;
        } else {
            duplicate = false;
            i--;
        }

    }
    System.out.println("(System)Success Create Normal Number");

    return normal_number;
}
