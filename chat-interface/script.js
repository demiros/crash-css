const users = [
	// {
	// 	"id": '931c251e3f204bec77b88bcc33a570d0',
	// 	"username": "Ivan"
	// },

	{
		"id": '42491332f3f278b69308b30eb34e0e2f',
		"username": "Demiro"
	},
	{
		"id": '931c251e3f204bec77b88bcc33a570d0',
		"username": "SampleBoy"
	},
	{
		"id": '931c251e3f204bec77b88bcc33a570d0',
		"username": "hldd3n"
	},
	{
		"id": '931c251e3f204bec77b88bcc33a570d0',
		"username": "nbd"
	},
	{
		"id": '931c251e3f204bec77b88bcc33a570d0',
		"username": "SampleBoy"
	},
	{
		"id": '931c251e3f204bec77b88bcc33a570d0',
		"username": "ENDBOY"
	},
]

const messages = [
	{
		"id": "",
		"date": "1652485480000",
		"user": "Ivan",
		"message": "chess1",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485481000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485482000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485483000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485484000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485485000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485486000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485487000",
		"user": "Ivan",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652484982000",
		"user": "Ivan",
		"message": "Hello",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485053000",
		"user": "Demiro",
		"message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est totam unde harum quas voluptatibus eius sint quia ex voluptas eaque a quae, laudantium quibusdam, suscipit ipsam adipisci accusantium dolor?",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485251000",
		"user": "Ivan",
		"message": "Hey bro, how are you",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485316000",
		"user": "Demiro",
		"message": "chess",
		"room": "lobby"
	},
	{
		"id": "",
		"date": "1652485336000",
		"user": "Ivan",
		"message": "Yeah",
		"room": "lobby"
	}
]

const userCleanArr = users.map(e => e.username)
const chatHeaderContainer = document.querySelector(".chat-header")
const chatMessagesContainer = document.querySelector(".chat-messages")
const chatInputContainer = document.querySelector(".chat-input")
const currentUser = "Demiro"
const currentRoom = "Lobby"

displayChatHeaderNav(currentRoom)
displayChatInput(currentRoom)
displayChatMessages(messages)

const msgInputElement = document.querySelector("#msg-input")
msgInputElement.addEventListener("keypress", (e) => handleMsgInputSend(e))


function handleMsgInputSend(e) {
	const inputText = msgInputElement.value

	if (e.key === "Enter" && inputText !== "") {
		e.preventDefault()
		msgInputElement.value = ""

		const messageToSubmit = {
			"id": "",
			"date": Date.now(),
			"user": currentUser,
			"message": inputText,
			"room": currentRoom
		}

		messages.push(messageToSubmit)
		document.querySelector(".chat-messages-list").remove()
		return displayChatMessages(messages)
	}
}

function displayChatMessages(messages) {
	const metaData = {
		cssClasses: {
			list: "chat-messages-list",
			listUser: "chat-messages-list__user",
			listUserStatusActive: "chat-messages-list__user--active",
			listUserStatusInactive: "chat-messages-list__user--inactive",
		}
	}

	const list = document.createElement("ul")
	list.className = metaData.cssClasses.list;

	const messagesMap = messages.map(e => {
		const isActiveStatus = userCleanArr.includes(e.user)
		const statusClass = isActiveStatus ? metaData.cssClasses.listUserStatusActive : metaData.cssClasses.listUserStatusInactive
		const { date, user, message } = e
		return `
			<li> 
				<p class=${metaData.cssClasses.listUser} data-message-date="${new Date(parseInt(date)).toLocaleString()}">${user}<span class=${statusClass}></span></p>
				<p>${message}</p>
			</li>
		`
	}).join("")
	list.insertAdjacentHTML("afterbegin", messagesMap)

	return chatMessagesContainer.append(list)
}

function displayChatInput(room) {
	// TODO add send button, or do not, we all loved mIRC :)
	const input = document.createElement("input")
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", `Message ${room}`)
	input.setAttribute("id", "msg-input");
	return chatInputContainer.append(input)
}

function displayChatHeaderNav(room) {
	const metaData = {
		cssClasses: {
			headerItem: "chat-header__item", // TODO change on refactor
			navToggle: "nav-toggle",
			navToggleLabel: "nav-toggle__label",
			navDrawerLeft: "chat-header__nav--left",
			navIconUsers: "chat-header__icon--users",
			navIconRooms: "chat-header__icon--rooms"
		},
		iconPathUsers: "chat-users-icon.svg",
		iconAltUsers: "Online Users"
	}

	const displayUsersNav = () => {
		const userList = users.map(userObj => {
			return `<li><a href="#">${userObj.username}</a></li>`
		}).join("")

		return `
			<div class=${metaData.cssClasses.headerItem}>
				
				<input type="checkbox" class=${metaData.cssClasses.navToggle} id=${metaData.cssClasses.navToggle} />
				<label for=${metaData.cssClasses.navToggle} class=${metaData.cssClasses.navToggleLabel}>
					<img
						class=${metaData.cssClasses.navIconUsers}
						src=${metaData.iconPathUsers}
						alt= ${metaData.iconAltUsers}
					/>
				</label>

				<nav class=${metaData.cssClasses.navDrawerLeft}>
					<p>${metaData.iconAltUsers}:</p>
					<ul>
						${userList}
					</ul>
				</nav>

			</div>
		`
	}

	const displayRoomInfo = (room) => {
		return `
			<div class=${metaData.cssClasses.headerItem}>
				<span>Room:</span>
				<span>${room}</span>
      </div>
		`
	}

	const displayRoomsNav = () => {
		//TODO everything
		return `
			<div class=${metaData.cssClasses.headerItem}>
				<img
					class=${metaData.cssClasses.navIconRooms}
					src="chat-svgrepo-com.svg"
					alt="Room lists"
				/>
			</div>
		`
	}

	// TODO add render function
	chatHeaderContainer.insertAdjacentHTML("afterbegin", displayRoomsNav())
	chatHeaderContainer.insertAdjacentHTML("afterbegin", displayRoomInfo(room))
	chatHeaderContainer.insertAdjacentHTML("afterbegin", displayUsersNav())
}

// *** Ideas to remember: 
// *) we can omit username above message if the prev msg user is the same, and if the message is sent within last 10 min. 
// *) for better IRC experience we can wrap(style) user in <> and remove dates on hover. 
// *) edit feature. 
// *) /command
