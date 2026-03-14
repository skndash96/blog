---
title: 'Many-to-One Networking with BLE Advertising on Commercial Smartphones'
seoTitle: 'Offline Many-to-One Networking via BLE Advertising on Android/iOS'
slug: 'many-to-one-ble-advertising-smartphones'
description: 'How to build an offline, high-concurrency, connectionless many-to-one topology using raw BLE advertising packets on commercial smartphones.'
pubDate: '2026-03-14'
tags: ["Networking", "BLE", "Android", "System Design"]
coverImage: './assets/bluetooth.png'
---

I had to work on some societal problems for my Product Design and Development course. So I was searching for an idea. I noticed at the end of the very same class, that the teacher spent 8 minutes taking attendance for 120 students give or take. There I had an idea. What if I could build an automated rollcall system?

Whenever I set out to solve some amazing problems, most of the times the solution is already there. Either already as a product or in github some other random guy's work. Let's see if there are any.

## Existing Solutions for Rollcall
I found solutions like:
- Dynamic QR codes on projector screen
- GPS based
- Biometric based
- Wifi Router based

What's bad with them?
- Requires Internet
- The college admin wont provide biometric data of students, and it isn't worth it for me (or a team) to collect biometric for each classroom for a product to work
- Easily spoofed (like picture sharing, video call, GPS spoof etc.)
- Hardware requirements and Bad UX

## Networking Options

Now I have to come up with something. Let's lay down the requirements
1. Offline
2. Requires less hardware
3. Great UX for both students and profs
4. Most students (if not all) has a mobile during class, I could take advantage of that.

I set out to find a solution, surfed the Android docs on Networking. Found out interesting technologies.
- Wifi Aware (NAN)
- Bluetooth Classic
- Bluetooth Low Energy (BLE GATT)
- BLE Advertising
- Ultrasound, Audio etc.

Wifi Aware is not commercially supported on many modern smartphones. Bluetooth Classic and GATT connections might be slow for 100-200 students because they require a connection to be established. BLE Advertising is a connectionless protocol, but it is not designed for massive concurrency. Audio based communications is not reliable.

But maybe I can find a way to use BLE Advertising to build a many-to-one network. I have a theoretical networking architecture in mind.  

I have no idea if this might work, __but if it does work__, let me tell you what can happen

---

## Market Opportunities & Monetization

It's not just an automated rollcall system. It's a many-to-one networking protocol where common people can be nodes.

- Every institute where mobiles are allowed inside classes (NITs, IITs etc.) can use this technology to build an automated rollcall system.
- Event organisers could take attendance with ease.
- Quizzes or Polls can happen offline inside a room (imagine there has been many situations people use paper for these kinds of things)

A reliable offline many-to-one protocol unlocks significant commercial and operational value, specifically in environments where internet dependency is a liability or network setup introduces UX friction.

Wait there's more!!!! If this succeeds, we are essentially giving a solid reason to install a mobile app in every student's mobile. This is very good from a Product Manager POV. So much possiblities for monetization.

## Bitchat - This guy

As I previously mentioned, there would always be a guy who has done it before. And sure enough, there was [Bitchat](https://github.com/permissionlesstech/bitchat)

BitChat is a decentralized, peer-to-peer messaging application designed for secure, private, and censorship-resistant communication over ephemeral, ad-hoc networks. [Here's the whitepaper](https://github.com/permissionlesstech/bitchat/blob/main/WHITEPAPER.md)

> Transport Layer: The underlying physical medium used for data transmission, such as Bluetooth Low Energy (BLE). This layer is abstracted away from the core protocol

Bitchat apparently uses BLE (probably advertising and GATT connections combined). The existence of Bitchat shows that it is possible to build a what I want. Hope so.

## The Protocol Architecture: BLE Advertising

The architecture consists of a central **Hub** (e.g., the professor) and multiple **Nodes** (e.g., the students). 

Note that all numbers are theoretical and vibe brain-stormed. But it makes sense to me.
### The Hub Implementation

1. **Broadcast Cycle:** Every ~300 ms, the Hub broadcasts paginated packets using BLE advertising. The payload contains:
    * `session_id`
    * `start_timestamp`
    * `page_number`
    * **`N`-length bitmap:** The i<sup>th</sup> bit is set to `HIGH` if the i<sup>th</sup> student is confirmed present. `N` is bounded by the BLE payload limit (typically handled via pagination).
2. **Receptor Mode:** Between broadcasts, the Hub listens for incoming BLE packets containing Node payloads and updates the localized bitmap in low-latency mode.
3. **Termination Conditions:** The Hub terminates broadcasting upon reaching a timeout based on `N`, an idle timeout with no new connections, or manual termination.

### The Node Implementation

1. **Initialization:** The Node retrieves its ID from the local database securely and calculates its expected pagination block based on the session ID.
2. **Collision Avoidance (TDMA/ALOHA):** The Node sleeps for `Math.random() * T ms` where `T` scales based on the bitmap length (e.g., for `N=200`, `T ≈ 1000ms`) with an added randomized jitter weight. This drastically minimizes the probability of all 200 nodes shouting simultaneously.
3. **Execution:** The Node emits continuous ~4 BLE advertising packets containing its encrypted ID payload disguised in the Manufacturer Data section.
4. **Acknowledgment Scan:** It then transitions to scanning mode (Low Latency), listening for the next pagination broadcast from the Hub.
5. **Verification Logic:** 
    * It checks the Hub's bitmap payload for the i<sup>th</sup> bit.
    * If `0` (Unacknowledged) ➔ Go to Step 1.
    * If `1` (Acknowledged) ➔ Stop broadcasting entirely to free up spectrum bandwidth.
6. **Relay Fallback (Mesh Concept):** To counter severe BLE range loss in deep lecture halls, recognized Nodes can briefly switch to a proxy relay state, rebroadcasting unacknowledged packets from distant devices before permanently sleeping.

---

## Challenges and What-Ifs

- I was concerned about the 2.4 GHz spectrum congestion. Some guy on r/networking said that it would be a problem because BLE works at airport where way more than 100 devices are present. There's also TDMA/ALOHA
- Android/iOS both support BLE advertising and scanning. It should work theoretically. If scanning is too slow, then I might have to setup some hardware for the Hub part.
- Edge cases where students dont have phone can be fixed like those students can ask their friends to advertise for them (we'll add some application level feature)
- Spoofing BLE packets for others cannot be prevented. What we can do is, ask the professor to take a picture of the classroom and some YOLO model will give head count (and also provide UI for correcting false detections)
- Someone might use Jammers to block the operation, cant do much about it.

## Next Steps

So for 100-200 students, ideally it should take 20-30 seconds. But come to think of the UX - At the end of every class, I'm asking students to stare at their phone for 20-30 seconds which is bad.

- If this setup works too good, then I'd try to make the process entirely background.
- If it doesnt work, I'll resort to GATT connections or other technolgies.

Guess I'll find out soon.

