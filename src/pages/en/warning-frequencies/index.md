---
path: /warning-frequencies/
lang: en
---

# Category: Frequencies

| Warning                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency headway longer than interval | <br><br>An entry in the ```frequencies.txt``` file was found where the ```headway_secs``` value is much greater than the difference between end_time and start_time. <br><br>Do not set ```headway_secs``` greater than the frequency interval. <br>We recommend you fix entries that cause this warning.                                                                                                                                                                                                                                               |
| Overlapping frequency-based trips <br><br><br><br><br>      | <br>This warning indicates that two trips with overlapping frequency intervals and the same sequence of stops and times were found operating on the same day. <br>This may indicate duplicate trips in the feed or misconfigured calendar entries that cause trips to activate on the wrong day. <br><br>Verify that you correctly defined the service periods and exceptions; for example, weekend service enabled on a weekday (because it is a holiday) but without disabling the weekday service may create duplicate trips. |

