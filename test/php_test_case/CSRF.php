<form method = "POST" action="<?= $form->encode($_SERVER['PHP_SELF']) ?>">
<table>
	<?php if ($errors) { ?>
		<tr>
			<td>다음 항목을 수정해주세요.:</td>
			<td><ul>
				<?php foreach ($errors as $error){ ?>
					<li><?= $form->encode($error) ?></li>
				<?php } ?>
			</ul></td>
	<?php } ?>

	<tr><td>크기:</td>
		<td><?= $form->input('radio',['name'=>'size', 'value'=>'small'])?>
		소<br/>
			<?= $form->input('radio',['name'=>'size', 'value'=>'medium'])?>
			중<br/>
			<?= $form->input('radio',['name'=>'size', 'value'=>'large'])?>
			대<br/>
		</td></tr>

	<tr><td>디저트를 선택해주세요.:</td>
		<td><?= $form->select($GLOBALS['sweets'],['name'=>'sweet'])?></td>
	</tr>

	<tr><td>주 메뉴를 두 가지 선택해주세요.:</td>
		<td><?= $form->select($GLOBALS['main_dishes'],['name'=>'main_dish','multiple'=>true])?></td>
	</tr>


</table>
</form>