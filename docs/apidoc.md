---
title: 接口列表
---

## 系统参数获取

+ 请求方式：POST
+ 请求地址：/settings
+ 详细说明：用户打开软件时获取对应系统参数根据参数决定用户端部分展示项
+ 返回参数：

| 参数            | 说明                                       |
| --------------- | ------------------------------------------ |
| isInvitationReg | 1、是；2、否；是否需要使用邀请码注册       |
| isRelationBut   | 1、是；2、否； 是否展示收藏网址的按钮      |
| fileUrl         | 文件服务器地址                             |
| reg_type        | 注册方式：1.账号注册 2.短信注册 3.邮箱注册 |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "fileUrl": "https://learnku.com/",
        "isInvitationReg": true,
        "isRelationBut": false,
        "reg_type": "2"
    }
}
```

## 账号注册

+ 请求方式：POST
+ 请求地址：/auth/reg
+ 请求参数：

| Body参数名     | 描述   |
| -------------- | ------ |
| invitationCode | 邀请码 |
| accountNum     | 账号   |
| password       | 密码   |

+ 详细说明：注册成功即登陆成功

+ 返回示例：

```json
{
    "msg": "注册成功",
    "code": 1,
    "data": {
        "accessToken": "Bearer 8|zQ5TnvHTyN1oXLzcRtvFC3o3zdsLppJT4TweFFGdtqRljGq8qF3IwXggYRt4P1UfmQCyswUjlWvKvxlS"
    }
}
```

## 短信注册

+ 请求方式：POST
+ 请求地址：/auth/reg-by-sms
+ 请求参数：

| 参数           | 描述      |
| -------------- | --------- |
| key            | 验证码key |
| code           | 验证码    |
| invitationCode | 邀请码    |

+ 返回示例：

```json
{
    "msg": "注册成功",
    "code": 1,
    "data": {
        "accessToken": "Bearer 10|UowijdTzT2Z5jWLNmW03RpaLeXZBMbj9XIjt0Qkrl5lZYOrvbXCFXIHroXoMb4iUz42blov9Cg7d4MAi"
    }
}
```

## 邮箱注册

+ 请求方式：POST
+ 请求地址：/auth/reg-by-email
+ 请求参数：

| 参数           | 描述      |
| -------------- | --------- |
| key            | 验证码key |
| code           | 验证码    |
| invitationCode | 邀请码    |

+ 返回示例

```
{
    "msg": "注册成功",
    "code": 1,
    "data": {
        "accessToken": "Bearer 11|OakSXk9nOc2WFUfMvLo4TAUuGI5XuIXZTXPa8GXiTlUFAvbirlyQ2j9qQTRWg570C6J3YKwjRhcV9CGk"
    }
}
```

## 会员登录

+ 请求方式：POST
+ 请求地址：/auth/login
+ 请求参数：

| 参数名     | 描述 |
| ---------- | ---- |
| accountNum | 账号 |
| password   | 密码 |

+ 返回示例：

```json
{
    "msg": "登录成功",
    "code": 1,
    "data": {
        "accessToken": "Bearer 9|WE6HhJ7l7KTcirgEzgNEUpBCj4PVTscGWZMYFoSMpw30saJUK1EgKWcJjERyypQXX5rLi2BDmFvtFhE1"
    }
}
```

## 发送短信注册验证码

+ 请求方式：POST
+ 请求地址：/sms/send-reg-code
+ 请求参数：

| 参数     | 描述   |
| -------- | ------ |
| phoneNum | 手机号 |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "key": "verificationCode_N7xAdVH8NZV5G8r",
        "expired_at": "2020-06-06 15:57:30"
    }
}
```

## 发送邮件注册验证码

+ 请求方式：POST
+ 请求地址：/email/send
+ 请求参数：

| 参数  | 描述     |
| ----- | -------- |
| email | 邮件地址 |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "key": "EmailCode_ztgbNnxkVOi3LI5",
        "expired_at": "2020-06-06 17:38:36"
    }
}
```

## 获取用户信息

+ 请求方式：POST
+ 请求地址：/profile/userinfo
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "userinfo": {
            "id": 1,
            "accountNum": "zhangsan",
            "avatar": "images/20200605/cZZlDcFMJO8VG5O32a99cHlybi3GbY3cxkoXkrur.jpeg",
            "avatarUrl": "http://yun-notes.test/storage/images/20200605/cZZlDcFMJO8VG5O32a99cHlybi3GbY3cxkoXkrur.jpeg",
            "nickName": "狗娃2",
            "sex": 1,
            "phoneNum": "17311111111",
            "regTime": "2020-06-05 09:40:35",
            "regIpAddrs": "172.25.0.1",
            "regInvitation": null,
            "invitationCoce": "1231"
        }
    }
}
```

## 编辑会员信息

+ 请求方式：POST
+ 请求地址：/profile/update
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 请求参数：

| 参数名   | 描述         |
| -------- | ------------ |
| nikeName | 昵称         |
| sex      | 1、男；2、女 |
| phoneNum | 手机号       |
| avatar   | 头像         |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "nikeName": "狗娃",
        "phoneNum": "17311111111",
        "sex": "1",
        "avatar": "images/20200605/cZZlDcFMJO8VG5O32a99cHlybi3GbY3cxkoXkrur.jpeg"
    }
}
```

## 修改密码

+ 请求方式：POST
+ 请求地址：/profile/update-pwd
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 请求参数：

| 参数        | 描述   |
| ----------- | ------ |
| oldPassword | 旧密码 |
| password    | 新密码 |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": []
}
```

## 上传头像

+ 请求方式：POST
+ 请求地址：/upload/upload-img
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 请求参数

| 参数 | 描述     |
| ---- | -------- |
| img  | 上传图片 |

+ 返回示例

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "path": "images/20200605/Lpbj2TllKTYOzv5a69Jhv3x8jKzHX0HrTxE5xXQR.jpeg",
        "link": "http://yun-notes.test/storage/images/20200605/Lpbj2TllKTYOzv5a69Jhv3x8jKzHX0HrTxE5xXQR.jpeg"
    }
}
```

## 关联地址列表

+ 请求方式：POST
+ 请求地址：/profile/relation-urls
+ 详细说明：根据用户注册时邀请码查询出对应关联地址列表，不分页
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": "eyJhcGkiOiJodHRwOlwvXC93d3cuYmFpZHUuY29tIiwidXJscyI6W3sidGl0bGUiOiIxMTEiLCJuYW1lIjoiMjIyIiwidXJsIjoiaHR0cDpcL1wvd3d3LmJhaWR1LmNvbSJ9LHsidGl0bGUiOiIzMzMiLCJuYW1lIjoiNDQ0IiwidXJsIjoiaHR0cDpcL1wvd3d3LmJhaWR1LmNvbSJ9LHsidGl0bGUiOiI3NzciLCJuYW1lIjoiODg4IiwidXJsIjoiaHR0cDpcL1wvd3d3LmJhaWR1LmNvbSJ9XX0="
}
```

:::danger

data为 `base64` 加密后的字符串，根据返回状态码判断是否需要跳转：201说明需要跳转。

:::

## 文件上传

+ 请求方式：POST
+ 请求地址：/file-list/upload
+ 详细说明：文件上传或者更新，操作成功后返回文件列表，分页（第一页）,上传文件大小限制最大不能超过2m
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 请求参数：

| 参数     | 描述         |
| -------- | ------------ |
| file     | 要上传的文件 |
| fileName | 文件名       |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "totalPage": 1,
        "totalSize": 3,
        "items": [
            {
                "fileName": "test22",
                "fileUrl": "filelist/1/mugLbNZAwVGzxmJXIZobwWZ5D04OHRXugIzGsn7u.txt",
                "link": "http://yun-notes.test/storage/filelist/1/mugLbNZAwVGzxmJXIZobwWZ5D04OHRXugIzGsn7u.txt",
                "addTime": "2020-06-05 12:18:55",
                "updateTime": "2020-06-05 12:18:55"
            },
            {
                "fileName": "test2",
                "fileUrl": "filelist/1/cSXfKrsudK9H4tww3wqFD6sCSoDwBL4irnfHXXVf.txt",
                "link": "http://yun-notes.test/storage/filelist/1/cSXfKrsudK9H4tww3wqFD6sCSoDwBL4irnfHXXVf.txt",
                "addTime": "2020-06-05 11:38:17",
                "updateTime": "2020-06-05 11:38:17"
            },
            {
                "fileName": "test",
                "fileUrl": "filelist/1/qCs2Vo0FhZUi8hS5n3TRWR8S5szH2KZpDLv5h03D.txt",
                "link": "http://yun-notes.test/storage/filelist/1/qCs2Vo0FhZUi8hS5n3TRWR8S5szH2KZpDLv5h03D.txt",
                "addTime": "2020-06-05 11:35:48",
                "updateTime": "2020-06-05 11:35:48"
            }
        ]
    }
}
```

## 文件列表

+ 请求方式：POST
+ 请求地址：/file-list
+ 详细说明：根据用户查询文件列表，按更新时间倒序排列，分页
+ 请求header：

```
Authorization：Bearer 4|bayCPlQPaL2hMltVZ2FfQkDSLzIUmyKgcf0rc3brkx8mo2yDXxYa0v7IllQoUijHFZYVYEDUTLcYjszw
```

+ 请求参数：

| 参数 | 说明           |
| ---- | -------------- |
| page | 请求页码 默认1 |

+ 返回示例：

```json
{
    "msg": "success",
    "code": 1,
    "data": {
        "totalPage": 1,
        "totalSize": 2,
        "items": [
            {
                "fileName": "test2",
                "fileUrl": "filelist/1/cSXfKrsudK9H4tww3wqFD6sCSoDwBL4irnfHXXVf.txt",
                "link": "http://yun-notes.test/storage/filelist/1/cSXfKrsudK9H4tww3wqFD6sCSoDwBL4irnfHXXVf.txt",
                "addTime": "2020-06-05 11:38:17",
                "updateTime": "2020-06-05 11:38:17"
            },
            {
                "fileName": "test",
                "fileUrl": "filelist/1/qCs2Vo0FhZUi8hS5n3TRWR8S5szH2KZpDLv5h03D.txt",
                "link": "http://yun-notes.test/storage/filelist/1/qCs2Vo0FhZUi8hS5n3TRWR8S5szH2KZpDLv5h03D.txt",
                "addTime": "2020-06-05 11:35:48",
                "updateTime": "2020-06-05 11:35:48"
            }
        ]
    }
}
```

