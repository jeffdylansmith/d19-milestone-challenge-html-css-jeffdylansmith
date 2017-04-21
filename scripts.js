var blog = [
{
	Title: "Education",
	Content: "My education started many years ago in a small town called Nashville.  I attended Lancaster Christian Academy, earning a high school diploma.  From there I went on to earn a Bachelor of Science in Video Production and Technology.  Subsequently attending Nashville Software School to further develope my creative skills in the feild of Software developement.",
	Copyright: "Dylan Smith 2017",
},
{
	Title: "Work",
	Content:"My work experience when I was 18.  I got a job in a Hewlit Packard return center warehouse, unloading and sorting shipments of broken computers.  From there I went on to work at 'nobetterdeal.com' warehouse doing similar work.  When I began attending school full time I got a part time job at Spencer's Gifts in the mall by my school.  Saddly, that job was to last over 5 years.  Upon my graduation, I took a job a Cavalry Logistics where I currently work.",
	Copyright:"Dylan Smith 2017",
},
{
	Title: "Work",
	Content:"My work experience when I was 18.  I got a job in a Hewlit Packard return center warehouse, unloading and sorting shipments of broken computers.  From there I went on to work at 'nobetterdeal.com' warehouse doing similar work.  When I began attending school full time I got a part time job at Spencer's Gifts in the mall by my school.  Saddly, that job was to last over 5 years.  Upon my graduation, I took a job a Cavalry Logistics where I currently work.",
	Copyright:"Dylan Smith 2017",
}]
var blogger = document.getElementById("blogdiv");
for (prop in blog) {
var bloggy = `<article class="articles">
              <header><h4>${blog[prop].Title}</h4></header>
              <p>${blog[prop].Content}</p>
              <footer><small>&copy; ${blog[prop].Copyright}</small></footer>
              </article>`;
	blogger.innerHTML += bloggy;
}


