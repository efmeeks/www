---
title: 'How to Set Up Gmail Aliases in iOS Mail'
date:   2017-07-23 12:00:00
---

### Generate an App Password for iOS Mail

* Go to your [Google Security settings](https://myaccount.google.com/security#signin)
* Under *Signing in to Google*, click *App Passwords*
* If prompted for your password, enter it
* Under *Select App*, choose *Mail*
* Under *Select Device*, choose *Other (Custom Name)*
* Enter a name for the app. I used *iOS Mail App*
* Click *Generate*
* Save this password as we will need it later. Let's refer to this generated app password as `$PASSWORD` from here forward ;)


### Configure iOS Mail

* Open *Settings* > *Mail* > *Add Account* > *Other* > *Add Mail Account*
* Enter your information

``` bash
Name          John Doe
Email         john.doe@gmail.com
Password      top$ecret
Description   Gmail
```

* For Incoming Mail, enter the following

``` bash
Host Name   imap.gmail.com
User Name   john.doe@gmail.com
Password    $PASSWORD
```

* For Outgoing Mail, I use [smtp2go](http://www.smtp2go.com), but you can also use Gmail's SMTP server

``` bash
Host Name   smtp.gmail.com
User Name   john.doe@gmail.com
Password    $PASSWORD
```

You're all set!

If you would like to use Google Calendar via the iOS Calendar App, just add an account and choose Gmail. Sign in with your usual Gmail address and password. Once the account is set up, go back into the settings and tap the green toggle next to Mail to turn it off, but leave the Calendar toggle on.
