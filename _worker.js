
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
ss://YWVzLTI1Ni1nY206VEV6amZBWXEySWp0dW9T@23.157.40.19:6679#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@23.157.40.20:8881#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9IiwiYWRkIjoiMTA0LjIwLjI2LjQwIiwicG9ydCI6ODA4MCwiaWQiOiI4MmNiOTNhMy02NWE5LTRkYWMtYTJhNy1kOTk3YjZjMjZkNmEiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJmYW50YXN0aWMtZG9lLWJpZHMtZW5kZWQudHJ5Y2xvdWRmbGFyZS5jb20iLCJwYXRoIjoiODJjYjkzYTMtNjVhOS00ZGFjLWEyYTctZDk5N2I2YzI2ZDZhLXZtIiwidGxzIjoiIn0=
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.6:8888#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206ZTRGQ1dyZ3BramkzUVk=@23.157.40.24:9101#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4er8J+Ht19GUl/ms5Xlm70iLCJhZGQiOiJhZG1pbi5hcnpvbmhvc3QuaXIiLCJwb3J0IjoyMDg2LCJpZCI6IjdkOTNlOTkyLTQ4Y2YtNDJkNC04NGY4LTc1NzY4ZTgxNWE0YyIsImFpZCI6MCwic2N5IjoiYXV0byIsIm5ldCI6IndzIiwiaG9zdCI6ImFkbWluLmFyem9uaG9zdC5pciIsInBhdGgiOiIvIiwidGxzIjoiIn0=
ss://YWVzLTI1Ni1nY206bEdxczk1UWtGSG8yTlY=@23.157.40.6:5499#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206bEdxczk1UWtGSG8yTlY=@23.157.40.6:5498#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1jZmI6YW1hem9uc2tyMDU=@35.87.25.21:443#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206Rm9PaUdsa0FBOXlQRUdQ@23.157.40.24:7306#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.26:5601#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4es8J+Hp19HQl/oi7Hlm70iLCJhZGQiOiJtaXpiYW4uYXJ6b25ob3N0LmlyIiwicG9ydCI6MjA4NiwiaWQiOiJlNjkwZmY5ZS0xNjc2LTRiZTMtZDEzNi1kY2FlNTg2Y2IxZTciLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJtaXpiYW4uYXJ6b25ob3N0LmlyIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.26:3306#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206Y2RCSURWNDJEQ3duZklO@23.157.40.26:8119#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UmV4bkJnVTdFVjVBRHhH@23.157.40.19:7001#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.19:5000#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@23.157.40.81:8090#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@23.157.40.6:8882#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9IiwiYWRkIjoiY2ZjZG4xLnNhbmZlbmNkbjkuY29tIiwicG9ydCI6MjA1MiwiaWQiOiIwN2E5MDJkMS03YzJkLTQ3ZGUtZjJjNS1jMjIzNmZjN2NkNDYiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJ1c3htLmluZWtva2trLnRvcCIsInBhdGgiOiIvIiwidGxzIjoiIn0=
ss://YWVzLTI1Ni1nY206ZTRGQ1dyZ3BramkzUVk=@23.157.40.24:9102#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@23.157.40.20:8080#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UmV4bkJnVTdFVjVBRHhH@23.157.40.24:7001#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206ZmFCQW9ENTRrODdVSkc3@23.157.40.6:2375#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.44:9090#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4e58J+Ht19UUl/lnJ/ogLPlhbYiLCJhZGQiOiJ0dS5tYWhpbHUuc2l0ZSIsInBvcnQiOjIwOTUsImlkIjoiN2E3MzdmNDEtYjc5Mi00MjYwLTk0ZmYtM2Q4NjRkYTY3YjgwIiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJob3N0IjoidHUubWFoaWx1LnNpdGUiLCJwYXRoIjoiLyIsInRscyI6IiJ9
ss://YWVzLTI1Ni1nY206Rm9PaUdsa0FBOXlQRUdQ@23.157.40.44:7306#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206WEtGS2wyclVMaklwNzQ=@23.157.40.66:8008#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklk@23.157.40.47:5003#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4e58J+Ht19UUl/lnJ/ogLPlhbYiLCJhZGQiOiIxNzIuNjcuMTUyLjE3MCIsInBvcnQiOjIwOTUsImlkIjoiN2E3MzdmNDEtYjc5Mi00MjYwLTk0ZmYtM2Q4NjRkYTY3YjgwIiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJob3N0IjoidHUubWFoaWx1LnNpdGUiLCJwYXRoIjoiLyIsInRscyI6IiJ9
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.39:5001#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4er8J+Ht19GUl/ms5Xlm70iLCJhZGQiOiIxNzIuNjcuMjIzLjI0MiIsInBvcnQiOjIwODYsImlkIjoiN2Q5M2U5OTItNDhjZi00MmQ0LTg0ZjgtNzU3NjhlODE1YTRjIiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJob3N0IjoiYWRtaW4uYXJ6b25ob3N0LmlyIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4eo8J+Hs19DTl/kuK3lm70iLCJhZGQiOiJ2bWVzcy5kaXNrc3RhdGlvbi5ldSIsInBvcnQiOjIwODYsImlkIjoiN2Q5M2U5OTItNDhjZi00MmQ0LTg0ZjgtNzU3NjhlODE1YTRjIiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJob3N0IjoiYWRtaW4uYXJ6b25ob3N0LmlyIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
ss://YWVzLTI1Ni1nY206ZmFCQW9ENTRrODdVSkc3@23.157.40.39:2376#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4e58J+Ht19UUl/lnJ/ogLPlhbYiLCJhZGQiOiIxMDQuMjEuODIuMzkiLCJwb3J0IjoyMDk1LCJpZCI6IjdhNzM3ZjQxLWI3OTItNDI2MC05NGZmLTNkODY0ZGE2N2I4MCIsImFpZCI6MCwic2N5IjoiYXV0byIsIm5ldCI6IndzIiwiaG9zdCI6InR1Lm1haGlsdS5zaXRlIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@23.157.40.66:8000#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@23.157.40.24:8882#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206VEV6amZBWXEySWp0dW9T@23.157.40.47:6697#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206WEtGS2wyclVMaklwNzQ=@23.157.40.26:8009#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@23.157.40.26:8090#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UmV4bkJnVTdFVjVBRHhH@23.157.40.47:7002#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206ekROVmVkUkZQUWV4Rzl2@23.157.40.47:6379#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@23.157.40.6:443#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@23.157.40.24:8000#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206bEdxczk1UWtGSG8yTlY=@23.157.40.26:5498#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206S2l4THZLendqZWtHMDBybQ==@23.157.40.20:8000#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4ep8J+Hql9ERV/lvrflm70iLCJhZGQiOiIxMDQuMTguMTkuMTkxIiwicG9ydCI6MjA1MiwiaWQiOiJhZWM4MmZhNi1hYjcwLTRkMGEtZTdmYi00MjJlZjcyOWQ5NjEiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJoZWxhbnY2Y2YuaW5la29ra2sudG9wIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
ss://YWVzLTI1Ni1nY206cEtFVzhKUEJ5VFZUTHRN@23.157.40.26:443#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+Hs/Cfh7FfTkxf6I235YWwLT7wn4er8J+Ht19GUl/ms5Xlm70iLCJhZGQiOiIxODguMTE0Ljk4LjAiLCJwb3J0IjoyMDg2LCJpZCI6IjdkOTNlOTkyLTQ4Y2YtNDJkNC04NGY4LTc1NzY4ZTgxNWE0YyIsImFpZCI6MCwic2N5IjoiYXV0byIsIm5ldCI6IndzIiwiaG9zdCI6ImFkbWluLmFyem9uaG9zdC5pciIsInBhdGgiOiIvIiwidGxzIjoiIn0=
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9IiwiYWRkIjoiMTA0LjE5LjU4LjYwIiwicG9ydCI6ODA4MCwiaWQiOiJkOWM1ZWM2YS1hOGQ4LTQ3MzItODQ0Ny01NmZiZDJmOTNlOTYiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJjb25jZW50cmF0aW9ucy10YXhpLWFib3V0LXJlY29nbmlzZWQudHJ5Y2xvdWRmbGFyZS5jb20iLCJwYXRoIjoiZDljNWVjNmEtYThkOC00NzMyLTg0NDctNTZmYmQyZjkzZTk2LXZtIiwidGxzIjoiIn0=
ss://YWVzLTI1Ni1nY206WTZSOXBBdHZ4eHptR0M=@23.157.40.29:8888#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9IiwiYWRkIjoiY2ZjZG4xLnNhbmZlbmNkbjkuY29tIiwicG9ydCI6MjA1MiwiaWQiOiIwN2E5MDJkMS03YzJkLTQ3ZGUtZjJjNS1jMjIzNmZjN2NkNDYiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJ1c3htLmluZWtva2trLnRvcCIsInBhdGgiOiIvIiwidGxzIjoiIn0=
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@23.157.40.66:8091#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+Hs/Cfh7FfTkxf6I235YWwLT7wn4er8J+Ht19GUl/ms5Xlm70iLCJhZGQiOiIxODguMTE0Ljk4LjAiLCJwb3J0IjoyMDg2LCJpZCI6IjdkOTNlOTkyLTQ4Y2YtNDJkNC04NGY4LTc1NzY4ZTgxNWE0YyIsImFpZCI6MCwic2N5IjoiYXV0byIsIm5ldCI6IndzIiwiaG9zdCI6ImFkbWluLmFyem9uaG9zdC5pciIsInBhdGgiOiIvIiwidGxzIjoiIn0=
vmess://eyJ2IjoiMiIsInBzIjoi8J+HpvCfh6pfQUVf6Zi/6IGU6YWLLT7wn4es8J+Hp19HQl/oi7Hlm70iLCJhZGQiOiI5NC4xNDAuMC4xMTAiLCJwb3J0Ijo4ODgwLCJpZCI6IjBkMWJmMjZhLWNlOTctNDcwNy1hMjcwLTdmNGQyYWUzNzMzNCIsImFpZCI6MCwic2N5IjoiYXV0byIsIm5ldCI6IndzIiwiaG9zdCI6ImZvb2QuemhhYWwuaXIiLCJwYXRoIjoiLyIsInRscyI6IiJ9
ss://YWVzLTI1Ni1nY206Rm9PaUdsa0FBOXlQRUdQ@23.157.40.24:7307#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206ekROVmVkUkZQUWV4Rzl2@23.157.40.39:6379#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9LT7wn4ep8J+Hql9ERV/lvrflm70iLCJhZGQiOiIxMDQuMTkuMjUwLjE1IiwicG9ydCI6MjA1MiwiaWQiOiJhZWM4MmZhNi1hYjcwLTRkMGEtZTdmYi00MjJlZjcyOWQ5NjEiLCJhaWQiOjAsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsImhvc3QiOiJoZWxhbnY2Y2YuaW5la29ra2sudG9wIiwicGF0aCI6Ii8iLCJ0bHMiOiIifQ==
vmess://eyJ2IjoiMiIsInBzIjoi8J+HuvCfh7hfVVNf576O5Zu9IiwiYWRkIjoienVsYS5pciIsInBvcnQiOjg4ODAsImlkIjoiMGQxYmYyNmEtY2U5Ny00NzA3LWEyNzAtN2Y0ZDJhZTM3MzM0IiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJob3N0IjoiY2RuLnZkcy1zZXJ2ZXIuaXIiLCJwYXRoIjoiLyIsInRscyI6IiJ9
ss://YWVzLTI1Ni1nY206a0RXdlhZWm9UQmNHa0M0@23.157.40.47:8882#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
ss://YWVzLTI1Ni1nY206UENubkg2U1FTbmZvUzI3@23.157.40.24:8091#%F0%9F%87%BA%F0%9F%87%B8_US_%E7%BE%8E%E5%9B%BD
https://sub.xf.free.hr/auto
https://hy2sub.pages.dev
`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
