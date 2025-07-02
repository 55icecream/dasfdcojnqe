###### Quizitt Mobile App  
**(Yes, we do have a mobile app!)**

> [!TIP]  
> For better quality of life (QOL), use `pnpm` or `yarn`.

---

###### Installation

```bash
Step 1

git clone https://github.com/quizittStartup/quizitt_app.git
```

> [!WARNING]
> Step 2 takes a decade if you're using npm or a potato computer.

```bash
Step 2

cd quizitt_app && npm install -g expo-cli && npm install

```

> [!NOTE]
> Now you're 50, have a family of 4, and it's time to follow more steps.


```bash
Step 3

if (emulator) {
    Open Android Studio and start your emulator.
} else {
    Enable Wi-Fi/USB debugging on your physical device.

    # USB debugging: Enable Developer Mode → Turn on USB Debugging.
    # Wireless debugging: Enable Developer Mode → Turn on Wireless Debugging.  
    # Android Studio → Devices → Pair using pairing code.  
    (Note: Your mobile device and the system running the app must be on the same network.)
}

```

```bash
Step 4

npx expo run:android

select "a" and allow the app to be installed on smartphone.

# or

npx expo start --dev-client

```
> [!IMPORTANT]
> Step 4 can be a bit of a pickle the first time.
> Make sure to check your smartphone for permission requests!