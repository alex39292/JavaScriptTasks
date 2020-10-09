const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift()); //Джаз
styles.unshift("Рэп", "Регги");
console.log(String(styles)); //Рэп,Регги,Классика,Рок-н-ролл