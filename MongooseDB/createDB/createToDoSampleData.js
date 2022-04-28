db = db.getSiblingDB('toDoSample')
db.createCollection('lists')
listsCollection = db.getCollection("lists")
listsCollection.remove({})
listsCollection.insert(
{
	  name: " ",
	  description: " ",
	  metaVerseId: 1,
}
)
listsCollection.insert(
{
	  name: "Metaverse Data",
	  description: "Cars I need to try before buying a car.",
	  metatVerseId: 2,
}
)
listsCollection.insert(
{
	  name: "School Supply List",
	  description: "Supply list for school classes.",
	  metaVerseId: 3,
}
)
db.createCollection('tasks')
tasksCollection = db.getCollection("tasks")
tasksCollection.remove({})
tasksCollection.insert(
{
	metatVerseId : 1,
	tasks : [
	 {
	  description: "Pick up 2 cans of tomato",
	  parcelID: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 2 onions",
	  parcelID: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 1 box of spagetti",
	  parcelID: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 1 (3 litter) Coke",
	  parcelID: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Cook recipe http://recipe.com/spagetti",
	  parcelID: 5,
	  shared: "wife",
	  status: "I"
	 }
	]
}
)
tasksCollection.insert(
{
	metatVerseId : 2,
	tasks : [
	 {
	  description: "Test drive a Porsche Boxter",
	  parcelID: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "To be gas consious, test drive a Tesla",
	  parcelID: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Ask your friend to give you a ride in his Lotus",
	  parcelID: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Ask to barrow the Mustang from my mom :-)",
	  parcelID: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Rent a Corvette",
	  parcelID: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)
tasksCollection.insert(
{
	metatVerseId : 3,
	tasks : [
	 {
	  description: "Pick drawing boards from friend",
	  parcelID: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Buy pencils, pens, and notebooks from Staples",
	  parcelID: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Go to the MS Store to buy a new Surface 3",
	  parcelID: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up a printer at Frys",
	  parcelID: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Get a couple of XBox Games to relax",
	  parcelID: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)