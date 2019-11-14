<template>
	<form class="feedback" @submit.prevent="submitHandler">
		
		<div class="feedback__title">Добавить отзыв</div>
		
		<div class="input-field">
			<input
							v-model="name"
							:class="{invalid: ($v.name.$dirty && !$v.name.required)}"
							id="name"
							type="text">
			<label for="name">Имя</label>
			<small
							class="helper-text invalid"
							v-if="$v.name.$dirty && !$v.name.required"
			>Поле Имя не должно быть пустым</small>
		</div>
		
		<div class="input-field">
			<input
							v-model="city"
							:class="{invalid: ($v.city.$dirty && !$v.city.required)}"
							id="city"
							type="text">
			<label for="city">Город</label>
			<small
							class="helper-text invalid"
							v-if="$v.city.$dirty && !$v.city.required"
			>Поле Город не должно быть пустым</small>
		</div>
		
		<div class="input-field">
			<input
							v-model="email"
							:class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
							id="email"
							type="text">
			<label for="email">Email</label>
			<small
							class="helper-text invalid"
							v-if="$v.email.$dirty && !$v.email.required"
			>Поле Email не должно быть пустым</small>
			<small
							class="helper-text invalid"
							v-else-if="$v.email.$dirty && !$v.email.email"
			>Введите корретный Email</small>
		</div>
		
		<div class="input-field">
			<textarea
							v-model="message"
							id="textarea1"
							class="materialize-textarea empty"
							:class="{invalid: ($v.message.$dirty && !$v.message.required)}"></textarea>
			<label for="textarea1">Текст отзыва</label>
			<small
							class="helper-text invalid"
							v-if="$v.message.$dirty && !$v.message.required"
			>Вы не оставили Ваш отзыв</small>
		</div>
		
		<div class="feedback__rating">
			<p>Оцените товар по 5 бальной шкале</p>
			<star-rating
							v-model="rating"
							:show-rating="false"
							:star-size="25"
			></star-rating>
			<small
							class="helper-text invalid red-text"
							v-if="$v.rating.$dirty && !$v.rating.required"
			>Забыли поставить рейтинг</small>
		</div>
		
		<div class="feedback__button">
			<button type="submit" class="waves-effect waves-light btn">Отправить отзыв</button>
		</div>
	
	</form>
</template>

<script>
  import 'materialize-css/js/global'
  import 'materialize-css/js/cash'
  import 'materialize-css/js/forms'
  import {email, required} from 'vuelidate/lib/validators'
  import StarRating from 'vue-star-rating/src/star-rating'
  import axios from 'axios'

  export default {
    name: "Feedback",
    data: () => ({
      rating: null,
      name: null,
      city: null,
      email: null,
      message: null
    }),
    validations: {
      rating: {required},
      name: {required},
      city: {required},
      email: {email, required},
      message: {required},
    },
    components: {
      StarRating
    },
    methods: {
      submitHandler () {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }

        const formData = {
          name: this.name,
          city: this.city,
          email: this.email,
          review_text: this.message,
          rating: this.rating
        };
        const jsonFormat = JSON.stringify(formData);

        axios({
          method: 'post',
          url: '/',
          data: jsonFormat
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
	.empty {
		resize: vertical;
		min-height: 7em;
	}
	
	.feedback {
		&__title {
			font-weight: bold;
			font-size: 1.5em;
			text-align: center;
		}
		
		&__rating {
			margin-bottom: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			p {
				margin: 0;
			}
		}
		
		&__button {
			display: flex;
			justify-content: center;
		}
	}

</style>
