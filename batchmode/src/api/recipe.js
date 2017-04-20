import axios from 'axios'
import store from '../store'

export function postRecipe(recipe, userId, prepTime, cookTime, cookTemp, servingAmount, servingType, deg, photo, recipeType, personalNotes ) {
	axios.post('http://localhost:3001/recipes',{recipe, userId, prepTime, cookTime, cookTemp, servingAmount, servingType,deg, photo, recipeType,personalNotes }).then(recipe=>{
		console.log(recipe)
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: recipe.data,
			userId: recipe.userId,
			prepTime: recipe.prepTime,
		    cookTime: recipe.cookTime,
		    cookTemp: recipe.cookTemp,
		    deg: recipe.deg,
		    servingAmount: recipe.servingAmount,
		    servingType: recipe.servingType,
		    photo: recipe.photo,
		    recipeType: recipe.recipeType,
		    personalNotes: recipe.personalNotes,
		    


		})
})
}
export function postUsers(user) {
	axios.post('http://localhost:3001/users',{user}).then(user=>{
		store.dispatch({
			type: 'POST_USERS',
			user: user.data,
			
		})
	})
}
export function postSteps(recipeId, directions, stepId) {
	axios.post('http://localhost:3001/steps',{recipeId, directions, stepId}).then(step=>{
		console.log(step)
		store.dispatch({
			type: 'POST_STEPS',
			recipeId: step.data.recipeId,
			directions: step.data.directions,
			stepId: step.data.stepId,
			
			
		})
	})
}
export function postIngredients(ingredients,stepId, amount, unit) {
	axios.post('http://localhost:3001/ingredients',{ingredients, stepId, amount, unit}).then(ingredient=>{
		
		store.dispatch({
			type: 'POST_INGREDIENTS',
			ingredient: ingredient.data.ingredients,
			stepId: ingredient.data.stepId,
			unit: ingredient.data.unit,
			amount: ingredient.data.amount
		})
	})
}

export function getRecipe(recipe){
	axios.get('http://localhost:3001/recipes', {recipe}).then(recipe=>{
		store.dispatch({
			type:'GET_RECIPE',
			recipe: recipe.data
		})
	})

}
// export function getPhoto(photo) {
// 	axios.get('https://api.unsplash.com/search/photos?query=dessert',{photo}).then(photo=>{
// 		console.log(photo)
// 		store.dispatch({
// 			type: 'GET_PHOTO',
// 			photo: photo.data,
// 			applicationId: "{4f6e548d0b56144befd0b2196ef0a7a21881fbcdaff823ac67ba060bb5e04d9b}",
//   			secret: "{ba7d1e96898e3bac476772914fca9e88c427d3d8e484a476ddec437feac4637e}",
//   			callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}",
			
// 		})
// 	})
// }

