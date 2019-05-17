const initialState = [
  {
    id: 1,
    name: 'Disinfecting Wipes (Lemon)',
    description: 'Lysol',
    price: 3000,
    image: 'https://m.media-amazon.com/images/I/71TwPx+CT9L._AC_UL872_FMwebp_QL65_.jpg'
  },
  {
    id: 2,
    name: 'WASO: Color-Smart Day Moisturizer SPF 30 Sunscreen',
    description: 'SHISHEIDO',
    price: 4000,
    image: 'https://www.sephora.com/productimages/sku/s2002822-main-grid@2x.jpg'
  },
  {
    id: 3,
    name: 'NCAA Evolution Basketball',
    description: 'Wilson',
    price: 6899,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41ysjYacjSL.jpg'
  },
  {
    id: 4,
    name: 'Velvet Shirt/Dress Hangers -30- Pack (Black)',
    description: 'Amazon Basics',
    price: 1299,
    image: 'data:image/webp;base64,UklGRqATAABXRUJQVlA4IJQTAABwXwCdASosAdQAPrFUoUskIqGhJBZKSIgWCelu6B+jcFKbP1V8Kn8H/nPFPzd+/d0L8Vyt9lWo18g+9/832ddjfAC9l+o8/0cEe4X2n0TPoPO77I/rb8AHfpeEl9+/4XsAf0n+4f+D1V/qz0JfVX7W/AV+vPps+xH9z///7pv7kEZ+niJq9Gg9acHIKo6OjRZRcXPIz0pyhPGBwJ6VDQxfaKKw0b84bdVTXDfPyDWYkoBDbEA6xgZsb4vvrA02vNJvG9Eolk+792tiYArnSwfWHWqJuGG3VV1ydPxpK5UZzVwR7/KzIX1NnCz2P8ZCSoI+I3ZlY7gb8fbH1dNoiW1cMNuqqEZpy5EQhoxvGIy6TOyKZfoJKZi01KZp9T4Q4+vtjo3lcpUcMNuqrrXB7/2AndVu8BQG2UBUM9cQKfgX4KH3huOuwaP/NxUbZCuoViRjXADoUjauEdbLjNtR7wHD72QMHd2Ai9MKtSWf4FYJAqcvned1i1vdKYjfAOjSkizlYI1WNx2ZXCm9D8ASBstUI+2k5mooTSHvF4WLZ2p5Hyf3vPBp0HzteHALlPdrYCLSWEnurp6LgJgaXsEdbIrtnqI57q9GDbp015cUa63OlO9eh1Y+hR7Zr/SLi9ZBU9l1JP6oKvtRIuWjPLp7+EMrx0x4QWOh04hpxGiAlnBkpa9dzYHVmZ/JgzxhKW9mL8bUVhJXoHJ6j/R2AkfjOr8yJwWC687Xg8tNHDpwiN2PDmgI0RHdeu2bN0gI+JMXvBsG6XLlsH0PX7v6d9Qwp7S1f3kRiMsuxZDRg+yEJrXnA+GppW9GjRSlOG3VGTgKCEc5xFb2EcSqkPVrYamMqFSF4db31ZRrCQ5bgMbIOueZMlX55DrCHJXk+kHmx+xWOgk36mcFNuiALhDMB/uovwD+kqogo24w5nt94giOQ7FSksMNuqryDuz0sEMm5P+M5mw6AtkqR4eXLvn2tb1xwsk3L6QfACR9HB5LWRcvY//h5leKAP4WrcMNuqryfRt4aufHVXSAAP75WEC1PU34WW7BNZ+u5cBzuW11qVwZ7qPTo3PnJ5JM0CtvK5jRFEPVmia3/0hdyPbQNISv75yogq4GAYdOPQYaxi1vhLmINGGLZjiqmlctPze+xsbfqSz1F0Yek2CJFZBnBSdQZn6DEp7dAeykuWd3G7ijH4XshU0nahLcDJca8/hQUAY0TWA0wI+WgjpDoYjvngcwnVhwhsnhUpl2CiS79aBnn4uIfdMErbV+lLlr2LzuhoI0UfQ6tRBoUgB6IZ7INqLao7dQ6Oixzy7Mx14r2uSGG8RlokZg+/kzkDEH+nJMPoJBy0zWted7mblfLSdujSZBQAiDjyEZ8GgJXdznvH4fIjk6zGfDDtJ7ABMPOD27DOYdbXoxmtrpZU19WGlwUQNFNzfguN3tbbQG2wmCo6B0egw7glqY5CnVX2GBxVEN/BBtzsLfhAvHICvn6o75VmuvNK0IzcT+l4nma4bPVWm0pg4Tngxk8aLwrEgAuQgD0sI2AzryG0+DR45e+cPauZ0R7bjtlEWwxm66I91G0nxY0CN6cd2zWYqhFgjC5s08+zykVO6HfzYdXymOpeqsU4gWKk0JSDTlXWrk0/TfibcEc7JGSqqQbBgbENF7wJvov2Rgo58xLmv6BesPqOVrGzIcCsRSP1Hmn/TCidXxP3J6cECYJfc7qlxmFARLYdQYlMkuNXfIKzJctlf8kd/cykhodQ/p7u6cL+mTTvRMK9Brtq+VbWOG3/NPcT7f7IWfQlZykIL49MmDXUx/o3JylmadMJD9w/c+FwveDkR5fUETj/P3zYXXkjh6GeLpHPdGQG5Xyr2cbPFQtemzHHMXuGCrt/roLhA4m2f2Ql3a7PO1Yg6L1br/LZMwYfXdmN6HV8nHG/tn3hSCYt5eztpUeMFaNQsmw8h+TAL1NBzI22J7B0TKPqk7vfDxEaBj3i0wn7olil5PhWkLny9KnOUov9gIYnxJyEZgANOhkza+fhbiwXDawR5rk7pCKbubD2WY/YbOWM04mg262kqGjHwDaH8QsNKzX1OJhqF1nclfz860eSyRdwG8BdKAZVwVXSH/4l3Gr6WBltzxcvMn7rnA38G0hnTUsM1qFPsYHJxZI/UMhJsvp1ZiSMmQNZW6W9gKf1hW5hAzI9IyQJIBt+hcTXMOHP5gpWptRKBTPNJcT6VHcPWXdOyvZpC9T/t72tQ0sxionMho2/0EVmphw1G6DokdgbMISYDnAbeFmRRbKvE0HFwm9yELS2WpFCbrf4PvDzHTsix5RLDO7S23/X8qpDQ6Utp3vt6FkMjZYfacd5kUl+aKTDz/dn3JLQC94QoOclU3I83PTmRJ4LxgjcGbWeqid5+7OFl+Zu0VZJlDFUEfyZV9Poal5ZLCGCd64HZcuRcf9DaUpuhbsgU9ZWT97SbSMMSvzaPJEdL+lMsmIgqcecSDfTIN+ON4j9bghE/YyzTPc00lMDlV42RQ7/D4oma7w194NhWujfrzEtP55EgRP+zo7AADFSsIJkxVC9r6QjdnDNmY0rIvWfcXoFFhlCMUk/49ig46VU+f0fh/EY2+3CCSzq5UjDOljyfprzdM1K2PBcrfPv5Fbk0hz1IghHWoYYjmvlIKaroj8IVdB5NYfu16SQkL+y0VX8GdPwFrOf9E0tmUHRt0fi2R8EDJFmXBLLJuRGfQhbX1qMTKfCBErJmxJAcZMmaHRBkkdIBlkl8l9rJZVq1sCB3IXAfR9kSt3prHY5p57yJksdp6H0bEztxOwrsz8z87y7Lek6DkFxjLgfiQY/0VPaMfKkMnF3x1omfVeeBWh0zOLgxa9AMYQAb8LqeCK09FiZE5C83vacDAKP5fhE7kpRDzZE/LUwteqJH0eNSj1GbZFjfMcuglyS3dxuLcOae2zzVzyCAxynnCrJj373o1IeUoItmgpLyzTl+zGKRxpvkaY3/xe3jPm38xFRCTRHMzaoOqJ/d5bOU99qHfWMMGQ7ArRB6GG/IHQTXr+LRTowBnEv3JXQwUvTTHfgTycKPBtwJetGJP8YXqIBLzUIPcJb7Ceh9vUYq6MmumZXoHr20aB0I3SdMXB/7iGmSIjvV59AWpLLWqt2y9h1IFv4oW7X42XUoTtp7QjdgXtomkSdAZKjnWDqIl7jraTLYwKtSiOhva12Khuh32kub0YCzhqHZdDxAFjS4J4cBsM9mh6ih2EEDRMgFTYSaPcw9oI26Ol7TWh131Px9tPY8luf5uhwfDN0+TsOjEYLSTmD3VQxBzRq4Q76hn4TbqUsZm71TYZx67T2bZYdDYEGAyUq8is8+mGbgVl/7vx2RvskunuPhVmaQvm7x866X1mb7BvW2CNbfnnMBWTC7pjXB9XJvnGibZuP3d37WehDcOTKdlC8i+224i+ZJ5zjJogJZYhLt+iakaxo95I7tu9d9QR1q+lIfGwGLJOZTGB+y2cCo1Q5qdVpfyirbxUXmwGiEwyhOfHS83inpAIAYnXbzX0MbjubVCPSXaBNd4t+6kZWLWz0SmpJxzwZm+i2x2ddkm/f9L/yIQtsF8AEznZY07rzBVCFN5jID2CtvMA9elRcdveTvfPrTuGghrcGxxKBjJlCZ5oawP3nyC+G6jHTf7HkNsrKR8rthIoK8uz6QRDLWMernnRkYlCbh0GunXPrzLa1UNggAaMl+TbNzZjuBYDQNM8iH8FmLvBRm0R9z0OZvj0D3NsLw7gURCP3Td+j12teYpVpXqYS6fwGpda5HxVwl93KSyACkYfOAGr/26/heZHHI3/SiBS72b+wxU7UF9uFmOd6oPLLYSZq2J+tbulLUHz0S9HPZfXb1xQPgm3le/CxYFgbIx92e1riYvhm34sMDVqdj5AY3lmRutgGNb7hHicCi6HM4cZwYovOePd0G50rdj+OsHEivCBOLsxPeNllivD2eQdVP5SpRF5BKwZ2vO94/0pTFgbtWf6bUuFLYe0d+M6Mh1WOfUQLkiI1RMQz6oMHiI7iyOIvHUJqdywf6oHAGyZNGE133wMkEO4vj3N0kb6rTUt15cbMiL5qABNo2JjbZCDw2CjAOdgWKy4uK0Woz8/lNGpY9jFn3ov/99c+sd82Fk+vm4r3PBgKFYzRz8kSdFh9nGmBEnaaj+ACk9Iuq1teB3OYf8yjguS7rrWVveLKOQ7ekB61pYjKcQeV3gIH7eWV++uMihudVTYVNKE+q3nXVTIrmy0QXa3kAxBpIAdwve2fWxz44VsijqMkDt5R2eLf+spNjGgTkDUJYzNVycGBwEqs8gnXaf084ScgXy34zQ5KsLZ4jgb268U8YCeZlP++gPtrxM1SFRavrQQbHU1ksbzJpUMJ7cNFXNsbh9cxagNXWt7KWPtpPa1CgisUAfjIOhXXUm3CCu37JyMupCWRz9rpobRpBM6eVrcIL+ebzQdBinOoyYRdzgSgjBerywmPNkRA2liYTvaw1//a0bLoXRIawaWHpkAHVOwQlkSBJSc/f8UKeryval4oKeeQCRfI2C2CA0XQNi/Sm4lfSwoUrT9qZRJUf9n8JRp3Wa62HRbagPNSu0Zmlh1UUbBZrkZzFwbgWZDVLAkW70BPBfQn1JK46sywoB0trYHgAvlOD5/T44NHV4eHrI1NJjQSiMzKwG3SB34CbQvA5khb6BGhbHICYyOjc6ruXcQW6xhJBAkoeqbC9C7aBqskUm4u/udC3mekArXNxaab56hbhLJ/XY1GTqKW4AM5KnPCpZ51FuMsZ5RoY+dOcyFH9DbnOEy477Im0/ibRSP6ZZvTmVKVdeAbs9LnmrO0DuH9Ce+r6F5d3XWUeOrKeJICBGGpSmp3v9XKHwqtv/bVpCDn5ZdNUjqGPA5TKRGDkLnzVJOfQmyBO+XMqWK2LCQoCqCF04QwdRcJiPUBsElNXQNPVHKkdj4QNDq+IS+QYElBegzgXq4AYxhZaNoTeCOT9zqzp0FLB77bmnxi/WjiFrtQSxYsHwuRo40pRpK6ipMDahIBYi5WfoLWajv/jExH1pq5zJi1RLvtEDW2srMMNNfO3gSbsudD7xVrQdHEPbGhHKLmMkeLQFC0Jpl400r2umZUSbg8qKlSm8EnAFA1ZlY2DSwF9kBeBwRCaR+fSQ2I8/gWNUB7XpZxiVE2d3iQ1H8a5q18e3QNFZTfdROrZfHTWgG+7ygO5/nwdJYS3cbu59W1ghk5digfnR2/WqE7QOWLVnq/FcWF+XgP+LXaxdLa8wnxtRsMuSL3NMDfzpVNnBAzl+p7GyI3t1IAl+RQ7ItVbt4ORHCCIQ4DOpFJd/EPO8WzE86tWZFbwBM1aTrNmlEl/sxfIFj2QRANl8wRCKf1h5t8LijmLUxlpkHaRob44zQN73zGDDnCTSZ0uiYLZsBz7OnCRZzZFnZWLw9wYTH1MbNojMjzQbrugP/Rv8C1zzwoIl2InLn9FD2qKvm1VitkfuAST3/d4a9pyDl8tOvea0LgI80LdL4+tg/EiZU2h6Ut3btDxezNXGJOwXJCT5C23NWsbCmD16ApB6l8IW0ykedmoBEJapmRVmp92orIGTAZXodebQt3j5O2VQmXB4Eo+U8rexZkgCiP65zxnHSmt+ZUSOg7wo/18PusNZyTpmCN6hfYEOaVnvACWwrFD3CW6TrSft1RtzRVHAvnTpf0mtT1yCLlZtv88QNxgujPJ9L7u3hS3JPaBN3udIEo1U/FH3ICqgpB6ZZAxqR1X9pklAWe2Abr8QnsCe4bnH2EPqH1y+eLpjlzuQzaikzlOxXzn66Pj94cD2SBSNZ06KZLpAzFCqal/l3EkadmgjYJOS+TGEErLrTKtge0/N0C7MTavApBP3WSnj67SoOn03HDKliHBOL9dJULT7GXC8jbAYhThyNZd67cHkjj+7zafq5RR9Ksw7cZW/lHMO4BHohyOgSM6EXEkoc5/L7wmNjzDAjJo3VpQ34VbDVgHN1+D2PXu/y5nfuR3Wj4PKKdfD89Kz3ZcTDF2gfrX2ZBhXsnj/kHJgSx5tMhiUUuzTWU4tm14Ra4cTKy2GWTpACKMJORK9DXbPuC0BU/SnelbTUWEHuUFcS6FYK0/22Sp9MNoYfUxkU9pexrmEh9GGwEd7ARdL21YZEC6ILL7Lyhy/5t8JkZlMf9NTRzdGCGnT5wRB/jr/76Lfc70XQveT/dWjWhp6sRusWBK5GvD5Ijrrw2JtmwBg8U066wtTiFJnjfCR1lw8O7vWNJYBJV06Cw8R5u2fHmDbw47LDddfhlnpzCp2I29SGLQAxVEC8zA3Ldj5P18BQk4Od89YpUCpPU7lOFysyzd/E9KKvBrWchLkD4xoJ2IAgN+HY7jjksS7K5bDChukTUHnAwaTzEnOw8oc44jmdixO7M2rmyma8ATKyIs99C/OV4SapWvObxyN6uEMTeusZx3gDXh2yFw4ugAnp1elXltY75l84RD/ty0rpLDahlIxco1ETRt4wITNlzIIDMN1xq/rWQAZQbxloheoST6gPxHBlQIZ4CGlxulRqvRvw3vnXtxDSg3tRJO9y4dqGaekyfwt1fDXaV6maFv+/ZTSCFktdaHaL5/5TDB6jfZOt9C+Pij99nu6N4UfJsYPQLa1k1v9Hv3UWznrX6SEron9C4An+rAOW9AntgNhDjyLKoItXibQt1uf94SADggAAA=='
  },
  {
    id: 5,
    name: 'Sun Stalk\'r Instant Warmth Bronzer',
    description: 'FENTY BEAUTY BY RIHANNA',
    price: 3000,
    image: 'https://www.sephora.com/productimages/sku/s2211027-main-grid@2x.jpg'
  },
  {
    id: 6,
    name: 'WASO: Clear Mega-Hydrating Moisturizer',
    description: 'SHISHEIDO',
    price: 4000,
    image: 'https://www.sephora.com/productimages/sku/s2002806-main-grid@2x.jpg'
  }
]


export const productReducer = (state = initialState, action) => {
  return state
}