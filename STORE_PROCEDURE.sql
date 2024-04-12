
select * from ActorLaboral


--STORE PROCEDURE QUE ESTAN EN EL CONTROLADOR
CREATE PROCEDURE SP_CambiarEsPlantaListar
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT b.EsPlanta, a.IdActor, a.NombreCompleto
    FROM Actor a
    INNER JOIN ActorLaboral b ON a.IdActor = b.IdActor
    WHERE b.EsPlanta = 1;
END

--STORE PROCEDURE QUE ESTAN EN EL CONTROLADOR
create PROCEDURE SP_CambiarEsPlanta
    @IdActor INT
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE ActorLaboral
    SET EsPlanta = 0
    WHERE IdActor = @IdActor;

    SELECT  IdActor, NombreCompleto
    FROM Actor
    WHERE IdActor = @IdActor;
END

EXEC SP_CambiarEsPlanta 20

exec SP_CambiarEsPlantaListar

select * from PromocionZoomdle


SELECT IdActor, NombreCompleto  FROM Actor where IdActor = 10

update ActorLaboral
set Esplanta = 1
where IdActor = 10