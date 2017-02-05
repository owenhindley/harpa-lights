(function(global){

    /*

        Example simple Visualiser class

    */

    var NoteVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        var data = 'iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAgAElEQVR4nO3debhfVX3v8XdyMpCEkDCEQUQxiiBgK2O5XKqgiFrFqcahVZBWsHoVbFG5XBXppdzSVotcq0yiFZQLQRmExymiCDi14FURAZEZVEAgjJmT/rFynhMgOef3O+e3v2utvd+v5/n+oY+PyXftk+/nrN9v77VBktSrLYC/AM4CrgMeANYAi4Frgc8ArwWm5foLSpLKMBnYCzgO+BGwkhQYY9XvgfcDU+L/ypKkXDYD3gp8EbiX3gJjQ/WfwPzYv74kKcokYA/gI8AP6H2X0WvdD+we1o0kqVGbAm8GvkD6uGmQgbG+ug/YPqIxSdJgTQJ2A44FrgJW0HxoPLWuIn2nIkkq3BzgTaQ7pn5LfGCsrw5ttGNJ0rhMAQ4ETgKuAVaRPzCeWrfjnVmSVIRNgDcCZwJ3kz8geqmXN7ISkqQx7Qp8CPgusJz8gdBv/evgl0SStD5bA0cAC0m3xOYOgInWVYNdHknSsMnAfox8lzHo5zJy1x2DWypJ0izgYOBU4DbyD/km68EBrZkkddLw09/H085dxmi1eOLLJ0ndMhc4hPRdxkTPmKq5DBBJGkOXdxkGiCT1aS6wADibbu8yDBBJGoO7DANEkno2h5FdRsRJtm0rA0RSZwzvMo4BribPSbZtKgNEUqttQtplnE77n8swQCRpgtxlGCCS1JPZjOwybiX/YO1KGSCSqjS8y1gELCH/MO1iGSCSqrDuLuMW8g9PywCRVLCdGdllPEH+gWkZIJIKtRHpJFt3GXWUASIpq51wl1FrGSCSQk3HXUZbygCR1LitgEOB80gvIco9+Npaq4FrgX8ADgz48wwQSQPnLiOu7l67zguAzda5BjMD/mwDRNJAPAs4ivRdxuPkH6xtreVr1/gYYJdRrocBIqlY00gfk5yCu4ym6x5Gdhmb93JxMEAkFWY74AjgUuAx8g/WttYKRnYZewCTe7k4T2GASMrKXUZc/Zb+dxmjMUAkhXsm7jIiahXptOCJ7DJGY4BIatxU0i7jJOB68g/WNtfvGNllbNHLxZkAA0RSI7ZlZJfxKPkHa1ur6V3GaAwQSQPhLiOuHiS9Y30BMK+Xi9MQA0TSuD2DtMtYCDxA/sHa1lrNk3cZQ71cnAAGiKSeTWFkl3EN6eOT3MO1rVXKLmM0BoikUW3DyC7jD+QfrG2t1aRQPp6ydhmjMUAkPclkYD/cZUTUQ4zsMrbs5eIUxgCRxNaM7DLuJ/9gbWvVuMsYjQEidZC7jLhaTArmQ0hHzreJASJ1xKakIbYQuI/8g7Wt1bZdxmgMEKmlJpEG2PGkgbaS/MO1rdXmXcZoDBCpRebiLiOihncZJ5E+CpzSy8VpIQNEqpi7jLh6mBTMRwDbj31pOsEAkSozl3Tb59nAveQfrG0udxmjM0CkCmwHvA/4OvAE+QdrW2sZ8B3gaGDnnq5MtxkgUsEOAq7E22ybrDtIx5+/Hti4t8uitQwQqUBzgQvJP1zbWMuB7wIfAnbt9YJovbbEAJGKMh+4ifyDtk11F3AG8EZgdu+XQuvxQuDDwPdIYWyASIXYEriV/AO39nqUkTum5vd1BfRUuY+5MUCkHl1C/uFba90DfA74c2BOvwuvJ9kF+CBwOenGgpzX1QCRevBm8g/hmmoF6QaDY4EXkZ6J0fhsDLwOOA24nfzX1gCR+jAZ+DX5/7GWXjeQnss4EJgxrpUWpLBd9zDNkh9ANUCkMRxI/n+oJdZK0qtc/xewO+4yJmIW8Brgs8Bt5L+2Bog0ICeT/x9qKXU7cAopVGdOYE27ri3H3Bgg0hh+Qv5/qLlqJfBD4KOkgecuY/xmAn8G/BtwC/mvrQEiBfgd+f+hRtYduMsYhLbsMgwQaQJy3yrZdK0CfgwcB+xFumlA4zMDeCXwf4GbyX9tDRAps9Xk/4c66LqTkV3GrMEtVed0YZdhgEgT0IYAWQYsAo7Cp78nag4jR/b/nvzX1gCRClZrgNxJOsn2YNxlTMTwLuMY0m3LK8h/bUspA0QaQy0B4i5jcDZhZJfRtZsoDBBpgEoOkLtwlzEo7jIMEGngSgqQ5aRdxjGkQ/U0fsO7jNOp6+nvksoAkcaQO0DuJg25BcBmDffadu4yDBApVHSAuMsYnNmM7DJ8l4sBIoWLCJB7GNllbB7TVmvtTArfRcAS8g/ZNpcBIo0hIkCmhXXTPlOB/YF/An5O/qHapTJApDFEBIjHh/TnBYzsMp4g/yDtahkg0hgMkPw2It2qfDrtOcm2DWWASGMwQPLYCXcZpZcBIo3BAIkxHXcZtZUBIo3BAGnOs0lHrywCHif/QLT6KwNEGoMBMjhDwL7ACaTjz3M/pNnminhQ0gCRxmCATMyzcJcRVdcAJ5He8zIv4M8zQKQxGCD9mU4aYKfgdxlN1yPAQuAInn4C8+yAP98AkcZggIzNXUZcXc/ILmOjUa6JASIVwAB5umm4y4iqR9nwLmM0BohUAAMk2Y40xC4FHiP/YG1zrbvLmNHLxVkPA0QqQFcDxF1GXI13lzEaA0QqQJcC5Jm4y4iqXzHxXcZoDBCpAG0OkKmkAXYS6WOT3EO1zbWEFMyD3GWMxgCRCtC2ANmWkV3GowPuw3pyNb3LGI0BIhWg9gBxlxFX0buM0RggUgFqDJBnkIbYQuCBgL9/l+sG8u0yRmOASAWoIUCm4C4jqpZSzi5jNAaIVIBSA2QbRnYZfwj4O3a5bifdznwgMLOHa1MCA0QqQCkBMhnYj7TLuAZYFfD36mrVsssYjQEiFSBngGzNyC7j/oC/R5frdurbZYzGAJEKEBkg7jLiqg27jNEYIFIBIgLkDcBpwB0Bf1aX617gbOCtwOa0mwEiFcC35tVbS0lHzB9FO3cZozFApAIYIHXVHbTru4zxMkCkAhggZdcyurvLGI0BIhXAACmv7mRklzFrw5eu0wwQqQAGSP5yl9E/A0QqgAGSp+4ETgcOxl3GeBggUgEMkJhylzFYBohUAAOkuboLdxlNMUCkAhggg6vhXcYxwC79XAT1zQCRCmCATKzcZeRhgEgFMED6q+W4yyiBASIVwAAZu+5mZJex8fiWWQNmgEgFMECeXu4yymeASAUwQFIN7zIWAJtNaEUVwQCRCtDVAHGXUTcDRCpAlwLkHtxltIUBIhWgzQHiLqO9DBCpAG0LkHV3GW1/K1+XGSBSAWoPkBWM7DL2YOT962o3A0QqQI0B8lvcZXSdASIVoIYAcZehpzJApAKUGiDuMjQaA0QqQCkBsgq4GncZ6o0BIhUgZ4D8jpFdxhZNN6pWMUCkAkQGiLsMDYoBIhUgIkAuAt4NPCuoJ7WfASIVoOkAWR3XijrEAJEKYICoRgaIVAADRDUyQKQCGCCqkQEiFcAAUY0MEKkABohqZIBIBTBAVCMDRCqAAaIaGSBSAQwQ1cgAkQpggKhGBohUAANENTJApAIYIKqRASIVwABRjQwQqQAGiGpkgEgFMEBUIwNEKoABohoZIFIBDBDVyACRCmCAqEYGiFQAA0Q1MkCkAhggqpEBIhXAAFGNDBCpAAaIamSASAUwQFQjA0QqgAGiGhkgUgEMENXIAJEKYICoRgaIVAADRDUyQKQCGCCqkQEiFcAAUY0MEKkABohqZIBIBTBAVCMDRCqAAaIaGSBSAQwQ1cgAkQpggKhGBohUAANENTJApAIYIKqRASIVwABRjQwQqQAGiGpkgEgFMEBUIwNEKoABohoZIFIBDBDVyACRCmCAqEYGiFQAA0Q1MkCkAhggqpEBIhXAAFGNDBCpAAaIamSASAUwQFQjA0QqgAGiGhkgUgEMENXIAJEKYICoRgaIVAADRDUyQKQCGCCqkQEiFcAAUY0MEKkABohqZIBIBTBAVCMDRCqAAaIaGSBSAQwQ1cgAkQpggKhGBohUAANENTJApAIYIKqRASIVwABRjQwQqQAGiGpkgEgFMEBUIwNEKoABohoZIFIBDBDVyACRCmCAqEYGiFQAA0Q1MkCkAhggqpEBIhXAAFGNDBCpAAaIamSASAUwQFQjA0QqgAGiGhkgUgEMENXIAJEKYICoRgaIVAADRDUyQKQCGCCqkQEiFcAAUY0MEKkABohqZIBIBTBAVCMDRCqAAaIaGSBSAQwQ1cgAkQpggKhGBohUAANENTJApAIYIKqRASIVwABRjQwQqQAGiGpkgEgFMEBUIwNEKoABohoZIFIBDBDVyACRCmCAqEYGiFQAA0Q1MkCkAhggqpEBIhXAAFGNDBCpAAaIamSASAUwQFQjA0QqgAGiGhkgUgEMENXIAJEKYICoRgaIVAADRDUyQKQCGCCqkQEiFcAAUY0MEKkABohqZIBIBTBAVCMDRCqAAdJNQ8COwMHAkcDJwAXA94HrgfuAB9ep+4BbgGuBK4GvA6cCHwYWAHsCmwX+/Q0QqQAGSDc8G3gHcCbwU2AJzVzvO4CFwNHAfsDMhvoxQKQCGCDtNAd4E3A6cCvND9sN1QrgcuAo4DkD7M8AkQpggLTHDOAtwEXAUvKFxmh1HXAC8LwJ9mqASAUwQOq3C3AK6buK3AHRz8/F94C3k4KvXwaIVAADpE6TgIOAReQPg4nWQ8Anga376N8AkQpggNRlMum7jZ+Rf/APup4APgU8o4d1MECkAhgg9Xgd6TuE3IO+6VpC+khutNuCDRCpAAZI+XYBriD/YI+uxcAxwLT1rIkBIhXAACnXxqTfxJeTf5jnrBuBlz9lbQwQqQAGSJleCvya/MO7lFpF+qJ9o7XrY4BIBTBAyjKNtOto+rrUWrcCf4oBIhXBACnHtqSzqHIP6dJrGXBiwJ9jgEhjMEDKsAB4mPzD2TJApJ4ZIPl9hPQZf+6BaRkgUl8MkHymAP9O/kFpGSDSuBggecwALib/kLQMEGncDJB4m5AOEsw9IC0DRJoQAyTWLOBq8g9HywCRJswAiTMd+C75B6PVWxkg0hgMkBiTgfPIPxSt3ssAkcZggMT4LPkHotVfGSDSGAyQ5n2A/MPQ6r8MEGkMBkizXoEPCdZaBog0BgOkOdsC95F/EFrjKwNEGoMB0ozJwHfIPwR7qduAC4F/Bg4HDgB2B+YDWwCbAvPW/uc9gJcBfwN8gvQw5N0F9GCASBkYIM04jvwDcEP1GOmOsMOB5w6o352A95KCaEkBPRogUgADZPBeAqwk/wBct1YBlwOHkt502KS5wBGkByZrfq+JASKNwQAZrI2A35B/+A3XEtILqrZvsOfR7AycDazYwN+v5DJApDEYIIP1UfIPvuF1/xKwQ7Pt9mxX0sdbudfFAJEGyAAZnB2BpeQffD8ifQleohcD15F/jQwQaQAMkMG5jLwDbxnwYdJ7Rko2HTiB8r4nMkCkPhkgg/F68g67W4C9G+9ysPYH7iF/UBgg0jgZIBM3BNxIvkF3MTCn8S6bMY9yn5cxQKQxGCATdzj5htzJwKTmW2zUEHAW+QPDAJH6ZIBMzBTgVvIMuH+h/vAYNgScQf7QMECkPhggE/MX5BluJ0Y0l8GnyB8cBojUIwNkYq4hfrCdSXt2Hk81GVhI/vAwQKQeGCDjtzfxQ+0bwNSI5jKaAfwAA0QqngEyfl8kdqDdCMwO6Sy/Lcl/i68BIo3BABmfzYAniBtmTwB/FNJZOV5C3ocNDRBpDAbI+Pw1scPs6Ji2inMiBohULANkfBYRN8h+SPpyuYumAb/CAJGKZID0b3NgOTFDbBX1HVEyaAdhgEhFMkD69w7ihthpQT2V7gIMEKk4Bkj/zidmgC0Ftg3qqXQ7kXZjBohUEAOkP0PAA8QMsC8E9VSLSzBApKIYIP3ZjZjhtQp4QVBPtdgHA0QqigHSn/cTM7y+GdVQZX6CASIVwwDpz5eJGV5vj2qoMkdigKglhoAdgNeQfjP9JOkL1iuAXwL3Ag+uU/eT3hz3U+BK0rlGnwM+DhwKvBR4HrH3/Bsg/Yl4cdQjwMyohiozj7hbqA0QDdQzScd3n0Y6hbWpoyweJn2EcRxwIM2ef2SA9G4mMUdrnBPVUKW+jgGiCswG3gB8Bvg1MT+066uVwPeBD5J2PINkgPQu6vTddwb1U6u/wwBRoaYDbyS9kyDysLx+6gbgJAZzl44B0ruoBwifHdVQpV6EAaLC7Ah8gvQ9Re6A6KeuBg4DNh5n3wZI7z5G89fzN2Hd1Gsy8AcMEBVgf+Aymh+kTdcjwKdJ39P0wwDp3Vk0fx3PD+umbt/GAFEmk4CDib2nPKqWAqfS+8cgBkjvvkXz1+9/h3VTt09jgCiDVwDXkn/QN13LgNOBrcZYDwOkdxE/N38Z1k3d3ocBokDPBL5C/sEeXQ+RHr6asoF1MUB6dwfNX6+9wrqpW8QR7waImEq6/fVR8g/znPVz4MXrWR8DpHcP0/x1mh/WTd12p/lrYYB03L7AdeQf3qXUatL3I7PWWSMDpHdLaf4azQvrpm470Py1MEA6aipwCvXfWdVU3QEcsHatDJDeRfw8bRTWTd22ovlrYYB00DzSMSC5h3TptQI4AQOkV1No/pqsCuumfpvQ/PV4KKwbFeFV1PcgYNurLQEyCXcgJdma5q/FvWHdKLujiDnozuqv2hIg4HcgJYn4DuTOsG6UzSTgRPIPSmv91aYAeYTm18u7sHoTcRfWzWHdKIsh4AzyD0lrw9WmALmT5tfL50B6E/EcyH+GdaNwM0lnWOUekNbo1aYA+SnNr5dvIuxNxKuFvxHWjUJNJ+YwNWvi1aYAWUTz6+VZWL2JOAvrS2HdKMwU4FLyD0art2pTgHye5tdrYVg3dYsI838M60YhJgFnk38oWr1XmwLk4zS/XreFdVOvIdIzGk1fiyOiGlKME8g/EK3+qk0Bcggxa/acqIYqtQcx1+GgqIbUvL/Go0lqrDYFyH8jZs3eGdRPraLeib59UD9q2N6k91vkHoZW/9WmANmYdNxI02t2TlRDlfo6zV+Dh0kfmatyWwB3kX8QWuOrNgUIwK9pfs0eY/zvuG+7rUjnuDV9Da6KakjNmQRcRP4h2EvdBXyV9FT8X5I+p50PbAtsuk5tu/a/3w14G/APpBdd3V5AD01U2wLkPGLW7W1RDVXmvcSs/ylRDak5HyD/ANxQLSEFxnuA5w+o3+eR7vxYCDxeQI+DqLYFSMQDbGtIH9Po6X5EzPq/OaohNWNPyvveYzVwJfAuYE5zrQMwGzgM+B4xn7s3uWZtEnEG0xrSwaDPDeqpFrsTdyPNM4J6UgOGiDk2otdaBVwAvKjJpkexK3AudQZJ2wJkCHiAmLU7M6inWnyFmHW/MaohNeNI8g++4boA2LnZdnu2IylIarqduW0BAnA+MWu3DNguqKfS7ULcL1B+/1GxbUivksw9+G4CXt5wr+O1P/BL8q9RVwPkMOLW77Sgnkp3AXFr/qqgntSAc8k78FYCx5MObCzZVOBYYDn5Q6JrAbIVcS8vW0V6DqrLIo5uH65HgBkxbWnQXkreYXcX8OLGuxysfUjnJ+UOii4FCMQc5jdc15K+e+mijYh59ma4fIizUpOAa8g36L5NemixRnMp94TitgbIu4hdx6Nj2ipO9NtGXx3TlgbtLeQbcmdR/294k4FTyR8YXQmQjYl5xe1wrQD2DemsHK8h9oaRe0ivi1BlJgG/IM+AO400fNtgEvCv5A+NLgQIwBeJXcubSc8HdcE80kCPXN9/CulMA/dK8gy3U2nngWmfIH9wdCFA9iN+Pb9Ce37h2ZCpxH7HNPxzOqgTJRTscuL/IX6OdobHsJPJHx5tDxBIh+5Fr+nZtPdndwi4mPg1/WpEcxq8FxD/YNw3Sb/ltNkQcAkGSNNeS551/VhEcxl8kjzr+ScRzWnwPk3sD8qtpLuWumBj4AYMkKblunvwFNqzExkC/o086+jBlZWaSexT58vo3kNZLwSewABp0pvIt75fpP7d9AzyvrZhn+ZbVBMWEPuD8vcxbRXnGAyQJg2Rjr7JtcYX0/zp0E2ZB3yHfGt3dfMtqikLiftBuYHyjydpyhTgZxggTXob+YbgGuAW6ttd70/8rbpPrQOablLNmEXcS5NWk45J6bJ9yXMcfFcCZBLwXfIOw2XAhyn/YbjpwAnEnSe2ofpy042qOa8j7gfl3KCeSncWBkiTXkAZL0H7BeWe6fZKYs+22lAtJp38rUqdTswPykrSezQE2xN/em+XAgTg/5B/OA6v+5eAHZptt2e7AheSf12G6/3Ntqum3UnMD8r5UQ1V4vMYIE2aSVmnI68kBUmul6LtRgqOkl6C1uXTjVvhucQNrz8O6qkWzyf2s+euBQikFxKVNDDXkL7/uhw4lPR8UJPmAkeQ7nAqbR2WA3s217oivIOYHxZv0Vu/b2GANO1fyD8sN1SPAecBh5N+mRuEnYD3knYbSwrocUP1dwPqVxlFHTv+7qiGKhMV4F0OkKnAD8k/MHup20ivjD2BdDvybsBzgE0Z+ahnytr/PB/YA3g76fueC4G7C+ihl7qE9jy532kRRz88AWwS1VBlZhB3AkBXAwTSq29/R/7BacGNdOco/FYbIuZojUuiGqrUecT8w+1ygED8S5Gsp9dyPK6kNXYi5ofmyKiGKhX1StauBwjAx8k/RLtcfpTdIq8n5ocm122LtXgWMdfBAElKe1NkV+rYXi6O6nEUzf/Q3ItflvXiNpq/FgZIMkRZD9J1oU7v6cqoKp+i+R8cz/fvzQU0fy0MkBFTSS8zyz1Yu1Dn0/5X/3ZSxND6VFg3dTuR5q+FAfJkc8l3MnJX6grSnYZqoSto/gfob6KaqVzE8yAGyNPNAr5B/kHbxvp/wLTeL4Vqcx3N/xC9LKybuu1D89fCAFm/jYCvkn/gtqnOwDOuWu8umv9BelFYN3XbgeavhQGyYUPAZ8k/eNtQXX3baOfcR/M/TIM636fttqL5a2GAjO2j5HnZVxtqOT7n0SkP0/wP1ZZh3dRtBgZIKV5C/te71lY3k87tUodEvMbWM296M4nmj9lYFdZN/bYFvk/+wVxDfQ3YbHzLrJpFHOLnDqQ3M2n+WiwJ66YdJpEeto1+c2Qt9ThwyLhXV9XzO5ByRHwHsjism3Z5KWW8O7yk+v/AXhNZVNUv4t0B3oXVm4i7sO4N66Z9pgMfI+b06pJrMelwVG/RFb+k+R84nwPpTcRzIDeFddNe84HLyD/Ic9SXgW0mvoRqiyto/ofuPVHNVO4Qmr8WPwjrpv1eD/yK/EM9on4EHDCYZVObRDx961lYvYk4C+trYd10wxBwKHAL+Yd8E/V94MCBrZZaJ+I03m+GdVO3iDD/TFg33TIJOBhYRP6hP9FaDSzE7y7Vg7+l+R9I3wfSm9to/lp8KKyb7toPOJt0y3TuMOinHiG9s2OPwS+J2uoNxPxw7hrVUKXmE3MdFkQ1JDYDDied9LuM/AGxvnoCuIh0ErQP/KpvuxDzg+o70UcX9U70P4pqSE8yF3grcA5wP3lD4x7gTNIvj7OabFrtN4WYrfYlUQ1V6jyavwbL8N0MJZhM+n7hSOArNPvR5SrSGVXnku6G3Bk/TtaA/ZTmh9dSPCtnQ2YDj9H8NfhFVEPq22zSc0CHAB8H/h34NvAfpCfg7+PpB58+BPweuBH4MelmlbNIpwm/HdiTdDyO1KgzaH54rQHeG9VQZd5JzPp/IagfSR0S8SrVNcA1UQ1VJurE17+KakhSd0TdAbQG2Deop1rsTtzaPz+oJ0kdcycxQ+yrUQ1V4hxi1v0e/PJUUkNOI2aQrcZnQobtAKwkZt0/F9STpA76c+I+Sjk3qKfSnUXcmr8lqCdJHbQJcUcvrCa9oKfL9iXdox+x3ktJD7JJUmMWEvcb8c3ARjFtFWcqcD1xa31hTFuSuuzNxA21NcDfx7RVnGOIXee3xbQlqcumEfOO9OFaBbwypLNyHEjcR1drgAfp7k5PUrCTif3t+AHg2SGd5bcN6eiJyPX9dEhnkgT8MbEDbg1wJe3/LXkaeV425LsdJIX6BvGD7jLSl8ttNEQ6jTh6TRdFNCdJ69qf+GG3hnSoYxuflo7+WHC4fJe1pCyiDvh7ap1De3Yik4FTybOOVwX0J0nrdRB5Bt8a4GvAjOZbbNR00vMXudbwVc23KEnrN4mYF01tqL4NbNF4l82YC1xKvrX7Ge38KFBSRV5NviG4BrgLeHHjXQ7WPjT7itJe6rWNdylJPbiYvMNwJXA86SOhkk0FjgWWk3e9Lm26UUnq1TbAYvIOxeHdyCEN9zpefwb8hvxr9CiwXcO9SlJf/if5h+NwXQDs3Gy7PduRdDT9avKvyxrgI822K0n9m0L6Yjb3gFy3FpG+b8hhb9JHRaUExxrg56TrJEnF+VPi3p7Xa60mHYPyLmBOc60DMBs4DPgesYch9lKrSA9/SlKxPkb+YbmhWkJ63/p7gOcPqN/nAUeQ3pPyeAE9bqiOH1C/ktSYyeQ5EHA8dRfpDrJPAO8GXkY6WHA+MA/YlPScyXxgd+AAUlj8M+kBwNsL6KGXupx01pYkFW9T6hmuba+7SWEoSdX4E/I/79D1WkH6XkqSqvO35B+iXa4Pjn2JJKlcJ5B/kHax/rGXiyNJJZsEnEn+gdqlOgsPSpTUEkOk22dzD9Yu1EV4x5WklpkF/JD8A7bN9R+khxklqXWmk86pyj1o21iXAjN7vxSSVJ8h8r3Cta11On5sJalDjiH/4G1DHY9fmEvqoA9Q3uGLtdRK4Oj+l1yS2mNP4BbyD+Sa6lZgr/EstiS1zRzSaba5B3MNdSmw+fiWWZLaaRJwFLCM/EO6xFq2dn38vkOSNmBf4DryD+yS6npgv4ksqiR1xWTgEOAP5B/eOWsx6f0jkye2nJLUPVsBZ1PWe8UjavXavree+BJKUre9Avg5+Qd7RF0LvGowyyZJgvQxzluBG8k/5JuoHwOvxi/JJalR+5FuZ23DR1uXAv99sMsjSRrL3qR3XzxG/iDopx4HvgDsM/glkST1Yw5wGOm3+SXkD78wBQkAAAB6SURBVIj11VLgMuCv1v59JUmFmQ28Cfg88HvyhsbvSTuNBcAmTTYtSRqsycALgf8BnE86c6up701Wr/3/Xwi8b+2f6/MbktQiG5O+O3kHcBxpp/It4CfATcC9pAf41g2HxWv/+5vW/u++RdpZHLf2/2fvtf+/kjQQ/wVSVEy4o0XLZQAAAABJRU5ErkJggg==';
        this.noteImg = new Image();
        this.noteImg.src = 'data:image/png;base64,'+data;

        this.beatHist = [];

        
        
        this.currentTime = undefined;
        this.currentSideTime = undefined;
        this.currentFrontState = 'small';
        this.currentDuration = 5000 * Math.max(.5, Math.random());

        this.currentSideState = 'small';

        this.states = {};
        this.states.small = {};
        this.states.small.noteOne = {}
        this.states.small.noteOne.pos = [0,0];
        this.states.small.noteOne.dims = [8,10];

        this.states.small.noteTwo = {};
        this.states.small.noteTwo.pos = [18, 0];
        this.states.small.noteTwo.dims = [8,10];

        this.states.small.noteThree = {};
        this.states.small.noteThree.pos = [24, 0];
        this.states.small.noteThree.dims = [8,10];

        this.states.big = {};
        this.states.big.noteOne = {};
        this.states.big.noteOne.pos = [-20, -2];
        this.states.big.noteOne.dims = [8,10];

        this.states.big.noteTwo = {};
        this.states.big.noteTwo.pos = [10,-14];
        this.states.big.noteTwo.dims = [22, 26];

        this.states.big.noteThree = {};
        this.states.big.noteThree.pos = [46, -2];
        this.states.big.noteThree.dims = [8,10];



        this.statesSide = {};
        this.statesSide.small = {};
        this.statesSide.small.noteOne = {}
        this.statesSide.small.noteOne.pos = [10,-6];
        this.statesSide.small.noteOne.dims = [8,10];

        this.statesSide.small.noteTwo = {};
        this.statesSide.small.noteTwo.pos = [18, -4];
        this.statesSide.small.noteTwo.dims = [8,10];

        this.statesSide.small.noteThree = {};
        this.statesSide.small.noteThree.pos = [24, -2];
        this.statesSide.small.noteThree.dims = [8,10];

        this.statesSide.big = {};
        this.statesSide.big.noteOne = {};
        this.statesSide.big.noteOne.pos = [10, 20];
        this.statesSide.big.noteOne.dims = [8,10];

        this.statesSide.big.noteTwo = {};
        this.statesSide.big.noteTwo.pos = [18,-20];
        this.statesSide.big.noteTwo.dims = [8, 10];

        this.statesSide.big.noteThree = {};
        this.statesSide.big.noteThree.pos = [20, -10];
        this.statesSide.big.noteThree.dims = [18,20];




        this.notes = {};
        this.notes.noteOne = {};
        this.notes.noteOne.pos = this.states[this.currentFrontState].noteOne.pos.slice(0);
        this.notes.noteOne.dims = this.states[this.currentFrontState].noteOne.dims.slice(0);

        this.notes.noteTwo = {};
        this.notes.noteTwo.pos = this.states[this.currentFrontState].noteTwo.pos.slice(0);
        this.notes.noteTwo.dims = this.states[this.currentFrontState].noteTwo.dims.slice(0);

        this.notes.noteThree = {};
        this.notes.noteThree.pos = this.states[this.currentFrontState].noteThree.pos.slice(0);
        this.notes.noteThree.dims = this.states[this.currentFrontState].noteThree.dims.slice(0);


        this.notesSide = {};
        this.notesSide.noteOne = {};
        this.notesSide.noteOne.pos = this.statesSide[this.currentSideState].noteOne.pos.slice(0);
        this.notesSide.noteOne.dims = this.statesSide[this.currentSideState].noteOne.dims.slice(0);

        this.notesSide.noteTwo = {};
        this.notesSide.noteTwo.pos = this.statesSide[this.currentSideState].noteTwo.pos.slice(0);
        this.notesSide.noteTwo.dims = this.statesSide[this.currentSideState].noteTwo.dims.slice(0);

        this.notesSide.noteThree = {};
        this.notesSide.noteThree.pos = this.statesSide[this.currentSideState].noteThree.pos.slice(0);
        this.notesSide.noteThree.dims = this.statesSide[this.currentSideState].noteThree.dims.slice(0);

    }

    var p = NoteVisualiser.prototype = new HarpaVisualiserBase();

    NoteVisualiser.NOTE_HIST_LENGTH = 10;

    Math.easeInExpo = function (t, b, c, d) {
        return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    };


    Math.easeOutExpo = function (t, b, c, d) {
        return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
    };

    p.updateNote = function(ctxType, note, state, currentSec, duration){

        var compareState = 'small';
        if (state == 'small')
            compareState = 'big';

        var noteType = 'notes';
        if (ctxType == 'statesSide')
            noteType = 'notesSide';

       
        change = this[ctxType][compareState][note].pos[0] - this[ctxType][state][note].pos[0];
        start = this[ctxType][state][note].pos[0];
        val = Math.easeOutExpo(currentSec , start, change, duration);
        this[noteType][note].pos[0] = val;

        change = this[ctxType][compareState][note].pos[1] - this[ctxType][state][note].pos[1];
        start = this[ctxType][state][note].pos[1];
        val = Math.easeOutExpo(currentSec , start, change, duration);
        this[noteType][note].pos[1] = val;

        change = this[ctxType][compareState][note].dims[0] - this[ctxType][state][note].dims[0];
        start = this[ctxType][state][note].dims[0];
        val = Math.easeOutExpo(currentSec , start, change, duration);
        this[noteType][note].dims[0] = val;

        change = this[ctxType][compareState][note].dims[1] - this[ctxType][state][note].dims[1];
        start = this[ctxType][state][note].dims[1];
        val = Math.easeOutExpo(currentSec , start, change, duration);
        this[noteType][note].dims[1] = val;

    };


    p.render = function() {


        this.updateFront();
        this.updateSide();

        this.renderFront();
        this.renderSide();

    };

    p.updateSide = function(){

        var now = Date.now();
        if (!this.currentSideTime)
            this.currentSideTime = now;

        var diff = now - this.currentSideTime;
        if (this.currentSideState == 'small'){
            // this.currentDuration = 5000 * Math.max(.5, Math.random());
            if (diff >= this.currentDuration){
                this.currentSideState = 'animateToBig';
                this.currentSideTime = now;
            
            }

        }else if (this.currentSideState == 'big'){
            // var duration = 5000 * Math.max(.5, Math.random());
            if (diff >= this.currentDuration){
                this.currentSideState = 'animateToSmall';
                this.currentSideTime = now;
             
            }

        }else if(this.currentSideState == 'animateToBig'){

            var duration = this.currentDuration;
            if (diff >= duration){
                this.currentSideState = 'big';
                this.currentSideTime = now;
                return;
            }

            var currentSec = now / 1000 - this.currentSideTime/1000;
           
            this.updateNote('statesSide','noteOne', 'small', currentSec, duration/1000);
            this.updateNote('statesSide','noteTwo', 'small', currentSec, duration/1000);
            this.updateNote('statesSide','noteThree', 'small', currentSec, duration/1000);

        }else if (this.currentSideState == 'animateToSmall'){

            var duration = this.currentDuration;
            if (diff >= duration){
                this.currentSideState = 'small';
                this.currentSideTime = now;
                return;
            }

            var currentSec = now / 1000 - this.currentTime/1000;
           
            this.updateNote('statesSide','noteOne', 'big', currentSec, duration/1000);
            this.updateNote('statesSide','noteTwo', 'big', currentSec, duration/1000);
            this.updateNote('statesSide','noteThree', 'big', currentSec, duration/1000);
        }

    };

    p.updateFront = function(){

        var now = Date.now();
        if (!this.currentTime)
            this.currentTime = now;

        var diff = now - this.currentTime;
        if (this.currentFrontState == 'small'){
            this.currentDuration = 5000 * Math.max(.5, Math.random());
            if (diff >= this.currentDuration){
                this.currentFrontState = 'animateToBig';
                this.currentTime = now;
            
            }

        }else if (this.currentFrontState == 'big'){
            // var duration = 5000 * Math.max(.5, Math.random());
            if (diff >= this.currentDuration){
                this.currentFrontState = 'animateToSmall';
                this.currentTime = now;
             
            }

        }else if(this.currentFrontState == 'animateToBig'){

            var duration = this.currentDuration;
            if (diff >= duration){
                this.currentFrontState = 'big';
                this.currentTime = now;
                return;
            }

            var currentSec = now / 1000 - this.currentTime/1000;
           
            this.updateNote('states','noteOne', 'small', currentSec, duration/1000);
            this.updateNote('states','noteTwo', 'small', currentSec, duration/1000);
            this.updateNote('states','noteThree', 'small', currentSec, duration/1000);

        }else if (this.currentFrontState == 'animateToSmall'){

            var duration = this.currentDuration;
            if (diff >= duration){
                this.currentFrontState = 'small';
                this.currentTime = now;
                return;
            }

            var currentSec = now / 1000 - this.currentTime/1000;
           
            this.updateNote('states','noteOne', 'big', currentSec, duration/1000);
            this.updateNote('states','noteTwo', 'big', currentSec, duration/1000);
            this.updateNote('states','noteThree', 'big', currentSec, duration/1000);
        }

    };

    p.renderFront = function(){

        var scaledHeight = 1 - (this.currentVolume / 20000);
        scaledHeight = Math.min(1, scaledHeight);

        this.frontCtx.save();

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);

        var noteStart = 40;
        var noteEnd = 220;
        var noteW = 8;
        var noteH = 10;
        var dX = 40;
        var dY = 0;
        var dW = noteEnd-noteStart;
        var dH = this.noteImg.height;
        var sX = this.notes.noteOne.pos[0] + 10 * scaledHeight;
        var sY = this.notes.noteOne.pos[1] + 2 * this.currentBeatValue;
        var sW = this.notes.noteOne.dims[0];
        var sH = this.notes.noteOne.dims[1];

        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);
     
        //sec note
        this.frontCtx.globalCompositeOperation = "source-over";
        var randomX = 50 * (Math.random() -.5);
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue,sY + randomX * this.currentBeatValue,sW + 10 * this.currentBeatValue,sH + 10 * this.currentBeatValue);
        
    
        //third note
        this.frontCtx.globalCompositeOperation = "source-over";
        var randomX = 50 * (Math.random() -.5);
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue,sY + randomX * this.currentBeatValue,sW + 10 * this.currentBeatValue,sH + 10 * this.currentBeatValue);
       
   


        // second note pairs
        var beatVal = this.beatHist[2];
        sX = this.notes.noteTwo.pos[0];
        sY = this.notes.noteTwo.pos[1] + 4 * beatVal;
        sW = this.notes.noteTwo.dims[0]-2;
        sH = this.notes.noteTwo.dims[1];

        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);
  
        //sec note
        this.frontCtx.globalCompositeOperation = "source-over";
        // var randomX = 5 * (Math.random());
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY + 10 * beatVal,sW,sH);
        
    
        //third note
        this.frontCtx.globalCompositeOperation = "source-over";
        var randomX = 5 * (Math.random() -1);
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * beatVal ,sY,sW,sH);
       
   
       //third note pairs
       var beatVal = this.beatHist[4];
        sX = this.notes.noteThree.pos[0] + 6 * beatVal;
        sY = this.notes.noteThree.pos[1] - 2 * beatVal;
        sW = this.notes.noteThree.dims[0];
        sH = this.notes.noteThree.dims[1];

        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);

        //sec note
        this.frontCtx.globalCompositeOperation = "source-over";
        var randomX = 5 * (Math.random());
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * beatVal,sY + randomX * beatVal,sW,sH);
        
        //third note
        this.frontCtx.globalCompositeOperation = "source-over";
        var randomX = 5 * (Math.random() -1);
        this.frontCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue ,sY + randomX * this.currentBeatValue,sW - 4 * this.currentBeatValue,sH -4 * this.currentBeatValue);
       
       

        this.frontCtx.globalCompositeOperation = "source-atop";

        this.frontCtx.fillStyle = 'rgba(200, 20, 25, 1)';
        this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);
        

        // this.frontCtx.globalCompositeOperation = 'source-over';
        var ran = Math.max(.5, Math.random());
        var r = Math.round(200 * ran);
        var g = Math.round(200 * ran);
        var b = Math.round(200 * ran);
        this.frontCtx.fillStyle = 'rgba('+r+','+g+','+b+',1)';
        this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height * this.beatHist[0]);
        
        // this.frontCtx.globalCompositeOperation = 'source-over';
        // this.frontCtx.fillStyle = 'rgba('+255 * .5+', '+200 * Math.random()+', 255, .5)';
        this.frontCtx.fillRect(0,this.faces.front.height,this.faces.front.width, - this.faces.front.height * this.beatHist[2]);

        this.frontCtx.restore();




    };

    p.renderSide = function(){

        var scaledHeight = 1 - (this.currentVolume / 20000);
        scaledHeight = Math.min(1, scaledHeight);


        this.sideCtx.save();

        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

        var noteStart = 40;
        var noteEnd = 220;
        var noteW = 8;
        var noteH = 10;
        var dX = 40;
        var dY = 0;
        var dW = noteEnd-noteStart;
        var dH = this.noteImg.height;
        var sX = this.notesSide.noteOne.pos[0];
        var sY = this.notesSide.noteOne.pos[1];
        var sW = this.notesSide.noteOne.dims[0];
        var sH = this.notesSide.noteOne.dims[1];

        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);
     
        //sec note
        this.sideCtx.globalCompositeOperation = "source-over";
        var randomX = 1 * (Math.random() -.5);
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue,sY + randomX * this.currentBeatValue,sW + 10 * this.currentBeatValue,sH + 10 * this.currentBeatValue);
        
    
        //third note
        this.sideCtx.globalCompositeOperation = "source-over";
        var randomX = 1 * (Math.random() -.5);
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue,sY + randomX * this.currentBeatValue,sW + 10 * this.currentBeatValue,sH + 10 * this.currentBeatValue);
       
   


        // second note pairs
        var beatVal = this.beatHist[2];
        sX = this.notesSide.noteTwo.pos[0];
        sY = this.notesSide.noteTwo.pos[1] + 4 * beatVal;
        sW = this.notesSide.noteTwo.dims[0]-2;
        sH = this.notesSide.noteTwo.dims[1];

        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);
  
        //sec note
        this.sideCtx.globalCompositeOperation = "source-over";
        // var randomX = 5 * (Math.random());
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY + 10 * beatVal,sW,sH);
        
    
        //third note
        this.sideCtx.globalCompositeOperation = "source-over";
        var randomX = 1 * (Math.random() -1);
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * beatVal ,sY,sW,sH);
       
   
       //third note pairs
       var beatVal = this.beatHist[4];
        sX = this.notesSide.noteThree.pos[0] + 6 * beatVal;
        sY = this.notesSide.noteThree.pos[1] - 2 * beatVal;
        sW = this.notesSide.noteThree.dims[0];
        sH = this.notesSide.noteThree.dims[1];

        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX,sY,sW,sH);

        //sec note
        this.sideCtx.globalCompositeOperation = "source-over";
        var randomX = 1 * (Math.random());
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * beatVal,sY + randomX * beatVal,sW,sH);
        
        //third note
        this.sideCtx.globalCompositeOperation = "source-over";
        var randomX = 1 * (Math.random() -1);
        this.sideCtx.drawImage(this.noteImg, dX, dY, dW, dH, sX + randomX * this.currentBeatValue ,sY + randomX * this.currentBeatValue,sW - 4 * this.currentBeatValue,sH -4 * this.currentBeatValue);
       
       
       this.sideCtx.globalCompositeOperation = "source-atop";

        this.sideCtx.fillStyle = 'rgba(20, 20, 250, 1)';
        this.sideCtx.fillRect(0,0,this.faces.side.width, this.faces.side.height);

        var ran = Math.max(.5, Math.random());
        var r = Math.round(255 * ran);
        var g = Math.round(255 * ran);
        var b = Math.round(255 * ran);
        this.sideCtx.fillStyle = 'rgba('+r+','+g+','+b+',1)';
        this.sideCtx.fillRect(0,0,this.faces.side.width, this.faces.side.height * this.beatHist[0]);
        
        // this.frontCtx.globalCompositeOperation = 'source-over';
        // this.frontCtx.fillStyle = 'rgba('+255 * .5+', '+200 * Math.random()+', 255, .5)';
        this.sideCtx.fillRect(0,this.faces.side.height,this.faces.side.width, - this.faces.side.height * this.beatHist[2]);


        this.sideCtx.globalCompositeOperation = 'destination-atop';

        this.sideCtx.fillStyle = 'rgba(200, 200, 255, 1)';
        // this.sideCtx.fillRect(0,0,this.faces.side.width, this.faces.side.height);

        this.sideCtx.restore();
    };

    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1){
            this.currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2){
            this.currentBeatValue = value;
            this.beatHist.unshift(value);
            if (this.beatHist.length > NoteVisualiser.NOTE_HIST_LENGTH)
                this.beatHist.pop();
        }
    };


    global.NoteVisualiser = (global.module || {}).exports = NoteVisualiser;

})(this);
