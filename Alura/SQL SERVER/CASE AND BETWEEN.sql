/****** Script for SelectTopNRows command from SSMS  ******/
SELECT 
	NOME, 
	YEAR([DATA DE NASCIMENTO]) as Ano,
	CASE 
		WHEN YEAR([DATA DE NASCIMENTO]) < 1990 THEN 'Adultos'
		WHEN YEAR([DATA DE NASCIMENTO]) BETWEEN 1990 AND 1995 THEN 'Jovens'
		ELSE 'Crian�as' 
	END as [Classifica��o Et�ria]
  FROM [SUCOS_VENDAS].[dbo].[TABELA DE CLIENTES];