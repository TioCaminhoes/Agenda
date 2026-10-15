from django.db import models

# Create your models here.

class Local(models.Model):
    nome = models.CharField(max_length=100, unique=True)
    endereco = models.TextField(max_length=200)
    capacidade = models.IntegerField()

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Local'
        verbose_name_plural = 'Locais'

class Categoria(models.Model):
    nome = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nome

    class Meta:
        ordering = ['nome']
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=500)
    data_inicio = models.DateTimeField()
    data_fim = models.DateTimeField()
    local = models.ForeignKey(Local, on_delete=models.CASCADE, related_name='eventos')
    categoria = models.ManyToManyField(Categoria, related_name='eventos')

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ['data_inicio']
        verbose_name = 'Evento'
        verbose_name_plural = 'Eventos'

    def vagas_restantes(self):
        return self.local.capacidade - self.inscricoes.count()

class Atividade(models.Model):
    titulo = models.CharField(max_length=100)
    palestrante = models.CharField(max_length=100)
    horário = models.TimeField()
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='atividades')

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ['horário']
        verbose_name = 'Atividade'
        verbose_name_plural = 'Atividades'

class Inscricao(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    inscrito_em = models.DateTimeField(auto_now_add=True)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='inscricoes')

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Inscrição'
        verbose_name_plural = 'Inscrições'

class Relatorio(models.Model):
    presentes = models.IntegerField()
    observações = models.TextField(max_length=500)
    evento = models.OneToOneField(Evento, on_delete=models.CASCADE, related_name='relatorios')