function ketqua() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    for (
      var i = Math.ceil(Math.sqrt(a));
      i < Math.ceil(Math.sqrt(b));
      i++
    ) {
      document.writeln(i * i);
    }
}