import dayjs from "dayjs";
import 'dayjs/locale/id';
import localeData from 'dayjs/plugin/localeData';
import duration from "dayjs/plugin/duration";
import cookie from "js-cookie";

dayjs.extend(duration);
dayjs.extend(localeData);   // Enable locale data functionality
dayjs.locale('id');         // Set the locale to Indonesian

const helpers = {
  cutText(text, length) {
    if (text.split(" ").length > 1) {
      const string = text.substring(0, length);
      const splitText = string.split(" ");
      splitText.pop();
      return splitText.join(" ") + "...";
    } else {
      return text;
    }
  },
  formatDate(date, format) {
    return dayjs(date).format(format);
  },
  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return "";
    }
  },
  onlyNumber(string) {
    if (string) {
      return string.replace(/\D/g, "");
    } else {
      return "";
    }
  },
  formatCurrency(number) {
    if (number) {
      const formattedNumber = number.toString().replace(/\D/g, "");
      const rest = formattedNumber.length % 3;
      let currency = formattedNumber.substr(0, rest);
      const thousand = formattedNumber.substr(rest).match(/\d{3}/g);
      let separator;

      if (thousand) {
        separator = rest ? "." : "";
        currency += separator + thousand.join(".");
      }

      return currency;
    } else {
      return "";
    }
  },
  masking(string) {
    let value = string.toString();
    const str = value.replace(/\./g, "");
    if (/^[0-9]*$/.test(str)) {
      return this.formatCurrency(str);
    }
    return '';
  },
  masking_remove(string) {
    let value = string.toString();
    const str = value.split(".").join("");
    return str;
  },
  timeAgo(time) {
    const date = new Date(
      (time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")
    );
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
      return dayjs(time).format("MMMM DD, YYYY");
    }

    return (
      (dayDiff === 0 &&
        ((diff < 60 && "just now") ||
          (diff < 120 && "1 minute ago") ||
          (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
          (diff < 7200 && "1 hour ago") ||
          (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
      (dayDiff === 1 && "Yesterday") ||
      (dayDiff < 7 && dayDiff + " days ago") ||
      (dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago")
    );
  },
  diffTimeByNow(time) {
    const startDate = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss").toString());
    const endDate = dayjs(dayjs(time).format("YYYY-MM-DD HH:mm:ss").toString());

    const duration = dayjs.duration(endDate.diff(startDate));
    const milliseconds = Math.floor(duration.asMilliseconds());

    const days = Math.round(milliseconds / 86400000);
    const hours = Math.round((milliseconds % 86400000) / 3600000);
    let minutes = Math.round(((milliseconds % 86400000) % 3600000) / 60000);
    const seconds = Math.round(
      (((milliseconds % 86400000) % 3600000) % 60000) / 1000
    );

    if (seconds < 30 && seconds >= 0) {
      minutes += 1;
    }

    return {
      days: days.toString().length < 2 ? "0" + days : days,
      hours: hours.toString().length < 2 ? "0" + hours : hours,
      minutes: minutes.toString().length < 2 ? "0" + minutes : minutes,
      seconds: seconds.toString().length < 2 ? "0" + seconds : seconds,
    };
  },
  isset(obj) {
    if (obj !== null && obj !== undefined) {
      if (typeof obj === "object" || Array.isArray(obj)) {
        return Object.keys(obj).length;
      } else {
        return obj.toString().length;
      }
    }

    return false;
  },
  toRaw(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  randomNumbers(from, to, length) {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
      numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }

    return numbers;
  },
  randomStrings(length) {
    const characters = 'A6BC1DEF0G3HIJ2KL4M5NOP8Q7RST9UVWXYZ01V23A45N6ML78ZBA9';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  },
  currentDate(format) {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();

    // Extract the year, month, and day from the Date object
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    const day = currentDate.getDate();

    // Construct the formatted date string
    let formattedDate = '';

    switch (format) {
      case 'standard':
          formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        break;

      case 'code':
          formattedDate = `${day < 10 ? '0' + day : day}${month < 10 ? '0' + month : month}${year}`;
        break;
    }

    return formattedDate;
  },
  toRGB(colors) {
    const tempColors = Object.assign({}, colors);
    const rgbColors = Object.entries(tempColors);
    for (const [key, value] of rgbColors) {
      if (typeof value === "string") {
        if (value.replace("#", "").length == 6) {
          const aRgbHex = value.replace("#", "").match(/.{1,2}/g);
          tempColors[key] = (opacity = 1) =>
            `rgb(${parseInt(aRgbHex[0], 16)} ${parseInt(
              aRgbHex[1],
              16
            )} ${parseInt(aRgbHex[2], 16)} / ${opacity})`;
        }
      } else {
        tempColors[key] = helpers.toRGB(value);
      }
    }
    return tempColors;
  },
  cookieGet(name, ctx) {
    if (typeof window === "undefined") {
      const nameLenPlus = name.length + 1;
      return (
        ctx?.req?.headers?.cookie
          ?.split(";")
          .map((c) => c.trim())
          .filter((cookie) => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
          })
          .map((cookie) => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null
      );
    } else {
      return cookie.get(name);
    }
  },
  cookieSet(name, value) {
    // ---- Use this cookie for local development ----
    // cookie.set(name, value);

    // ---- Use this cookie for live production ----
    cookie.set(name, value, { secure: true });
  },
  cookieRemove(name) {
    cookie.remove(name, { secure: true });
  },
  populateErrors(resErrors) {
    const errDatas = Object.values(resErrors);
    let errors = [];
    for (let i = 0; i < errDatas.length; i++) {
      for (let j = 0; j < errDatas[i].length; j++) {
        errors.push(errDatas[i][j]);
      }
    }

    return errors.join(" ");
  },
  validationImage(e) {
    const types = ["image/png", "image/jpg", "image/jpeg"];
    let typeError = false;

    types.every((type) => {
      if (type === e.target.files[0]?.type) {
        typeError = false;
        return false;
      } else {
        typeError = true;
      }
      return true;
    });

    if (typeError) {
      return {
        stat: false,
        msg: "Allowed file types are: png, jpg, jpeg",
      };
    }

    if (e.target.files[0].size > 5000000) {
      return {
        stat: false,
        msg: "Allowed file size is no more than 5Mb",
      };
    }

    return {
      stat: true,
      msg: "",
    };
  },
};

export { helpers as helper };
