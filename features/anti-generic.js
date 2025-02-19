function cleanUp() {
  if (allowCleanUp) {
    var titles = [];
    document.querySelectorAll("div.thumbnail.project").forEach(function (el) {
      var title = el
        .querySelector("div.thumbnail-title")
        .firstChild.textContent.toLowerCase();
      if (title.includes("part ")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("#trending")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("test")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("gf")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("bf")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("girlfriend")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("boyfriend")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("doors")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("scp")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("speedrun platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("cave platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("dark platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("jungle platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("platformer 1")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("platformer 2")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("platformer 3")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("fnf")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("funkin")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("vs")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("Add yourself")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("your oc")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("scratch's smooth saturday")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("dave")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("bambi")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("fnf vs")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("friday night funkin")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("funk")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("sarvente")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("singing")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("ays")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("ays/oc")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("friday night")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("scratched out")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("dave and bambi")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("dark") && title.includes("platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("friday night") && title.includes("funkin")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("dave") && title.includes("bambi")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("fnf") && title.includes("vs")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("funkin") && title.includes("vs")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("generic") && title.includes("platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("jungle") && title.includes("platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("night") && title.includes("platformer")) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("OST")) {
        console.log(title);
        el.style.display = "none";
      }
      if (countInstances(title, "#") > 3) {
        console.log(title);
        el.style.display = "none";
      }
      if (title.includes("alphabet") && title.includes("lore")) {
        console.log(title);
        el.style.display = "none";
      }
      titles.forEach(function (el2) {
        if (similarity(el2, title) > 0.5) {
          if (el !== undefined && el !== null) {
            console.log(title);
            el.style.display = "none";
          }
        }
      });
      titles.push(title);
    });

    function countInstances(string, word) {
      return string.split(word).length - 1;
    }

    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0) costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue =
                  Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0) costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

    function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (
        (longerLength - editDistance(longer, shorter)) /
        parseFloat(longerLength)
      );
    }
    if (window.location.href.includes("https://scratch.mit.edu/explore/")) {
      setTimeout(cleanUp, 200);
    }
  }
}
if (window.location.href.includes("https://scratch.mit.edu/explore/")) {
  var allowCleanUp = true;
  cleanUp();
  ScratchTools.setDisable("anti-generic", function () {
    allowCleanUp = false;
    document.querySelectorAll("div.thumbnail.project").forEach(function (el) {
      el.style.display = null;
    });
  });
}
