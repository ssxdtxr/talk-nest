import { IsPasswordMatching } from '@/libs/common/decorators/is-passwords-matchins.decorator'
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate
} from 'class-validator'

export class RegisterDto {
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
	name: string

	@IsString({ message: 'Email должно быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат Email.' })
	@IsNotEmpty({ message: 'Email обязательно для заполнения.' })
	email: string

	@IsString({ message: 'Пароль должно быть строкой.' })
	@IsNotEmpty({ message: 'Пароль обязательно для заполнения.' })
	@MinLength(6, { message: 'Пароль должен содержать минимум 6 символов.' })
	password: string

	@IsString({ message: 'Пароль подтверждения должен быть строкой.' })
	@IsNotEmpty({
		message: 'Поле подтверждения пароля обязательно для заполнения.'
	})
	@MinLength(6, {
		message: 'Пароль подтверждения должен содержать минимум 6 символов.'
	})
	@Validate(IsPasswordMatching, { message: 'Пароли не совпадают.' })
	passwordRepeat: string
}
