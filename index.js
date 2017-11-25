// Time unit
const Millisecond = 1;
const Second = Millisecond * 1000;
const Minute = Second * 60;
const Hour = Minute * 60;
const Day = Hour * 24;
const Month = Day * 30; // diffrent in every month
const Year = Month * 12;
const Decade = Year * 10;

// Javascript not support Microsecond
const Microsecond = Millisecond / 1000;

const Byte = 1;
const KB = Byte * 1024;
const MB = KB * 1024;
const GB = MB * 1024;
const TB = GB * 1024;
const PB = TB * 1024;
const EB = PB * 1024;
const ZB = EB * 1024;
const YB = ZB * 1024;

const Hundred = 100;
const Thousand = Hundred * 10;
const Million = Thousand * 1000;
const Billion = Million * 1000;

module.export = {
  Microsecond,
  // time unit
  Millisecond,
  Second,
  Minute,
  Hour,
  Day,
  Month,
  Year,
  Decade,

  // byte unit
  Byte,
  KB,
  MB,
  GB,
  TB,
  PG,
  EB,
  ZB,
  YB,

  // number unit
  Hundred,
  Thousand,
  Million,
  Billion
};
